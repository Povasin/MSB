const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const https = require('https');
const bcrypt = require('bcrypt');
app.use(express.static(path.resolve(__dirname, './')));
app.use(express.json())
const Datastore = require('nedb');
const users = new Datastore({filename : './server/orders', autoload: true });
users.loadDatabase();
app.get('/', (req, res) => {  
    res.sendFile(path.resolve(__dirname, './index.html')); 
});
app.post('/register', function(request, response){  
    const {email, password, name, phone, desired, orderMass} = request.body.data.order;
    users.findOne({email: email}, function(err, doc) { 
        if (doc) {
            return response.status(400).json("Пользователь с таким email уже существует")
        } else{
            const hashPassword = bcrypt.hashSync(password, 7);
            users.insert({email, password: hashPassword, name, phone, desired, orderMass});
            response.json({email, password: hashPassword, name, phone, desired , orderMass});
        }
    }); 
});
app.post('/login', (request, response)=>{
    const {email, password} = request.body.data.order;
    users.findOne({email: email},function(err, doc) { 
        if (doc) {
            const validPassword = bcrypt.compareSync(password, doc.password)
            if (!validPassword) {
                return response.status(400).json(`Введен неверный пароль`)
            } else{
                response.json({doc})
            }
        } else if (!doc){
            return response.status(400).json("Пользователь с таким email не существует")
        }
    }); 
})
app.post('/adminLogin', (request, response)=>{
    const {email, password} = request.body.data.order;
    users.findOne({email: email},function(err, doc) { 
        if (doc) {
            const validPassword = bcrypt.compareSync(password, doc.password)
            if (!validPassword) {
                return response.status(400).json(`Введен неверный пароль`)
            } else{
                response.json(doc.email)
            }
        }
    }); 
})
app.post('/bag', (request, response)=>{
    const {email,orderMass } = request.body.data.order;
    users.findOne({email: email},function(err, doc) { 
        if (doc) {
            doc.orderMass = orderMass 
            response.json({doc})
            users.update({email: email}, {email: email, password: doc.password, name: doc.name, phone: doc.phone, desired: [], orderMass: orderMass}, {});
            users.loadDatabase();
        }
    }); 
})
app.post('/getFullOrderLoginAdmin', (request, response)=>{
    users.findOne({email: request.body.data.email},function(err, doc) { 
        if (doc) {
            response.json('ok')
            users.update({email: request.body.data.email}, {email: request.body.data.email, password: doc.password, name: doc.name, phone: doc.phone, desired: doc.desired, orderMass: request.body.data.order}, {});
            users.loadDatabase();
        }
    }); 
})
app.post('/overwriteMassAdmin', (request, response)=>{
    users.find({},function(err, doc) { 
        if (doc) {
            response.json({doc})
        }
    }); 
})
app.post('/overwriteMass', (request, response)=>{
    users.findOne({email:request.body.data.order},function(err, doc) { 
        if (doc) {
            response.json({doc})
        }
    }); 
})

app.get('/getFull', function(request, response){
    users.find({}, function (err, docs) {
        response.json(docs);
    });
});
https
  .createServer(
    {
      key: fs.readFileSync("./sslcert/privkey.key"),
      cert: fs.readFileSync("./sslcert/fullchain.crt"),
    },
    app
  )
  .listen(5000, function () {
    console.log(
      "Example app listening on port 5000! Go to https://localhost:5000/"
    );
  });