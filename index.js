const express = require('express')
const path = require('path');
const PORT = process.env.PORT || 5000
const app  = express()
const http = require('http').Server(app);
const bcrypt = require('bcrypt');
app.use(express.static(path.resolve(__dirname, './')));
app.use(express.json())
const Datastore = require('nedb');
const users = new Datastore({filename : './server/orders', autoload: true });
users.loadDatabase();
app.get('/', (req, res) => {  
    res.sendFile(path.resolve(__dirname, './index.html')); 
});
app.post('/api/register', function(request, response){  
    const {email, password, name, phone, desired, orderMass} = request.body.data.order;
    users.findOne({email: email}, function(err, doc) { 
        if (doc) {
            console.log(doc);
            return response.status(400).json("Пользователь с таким email уже существует")
        } else{
            const hashPassword = bcrypt.hashSync(password, 7);
            users.insert({email, password: hashPassword, name, phone, desired, orderMass});
            response.json({email, password: hashPassword, name, phone, desired , orderMass});
        }
    }); 
});
app.post('/api/login', (request, response)=>{
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
app.post('/api/getFullOrderLogin', (request, response)=>{
    const {email,orderMass } = request.body.data.order;
    users.findOne({email: email},function(err, doc) { 
        if (doc) {
            doc.orderMass = orderMass 
            console.log(doc);
            response.json({doc})
            users.update({email: email}, {email: email, password: doc.password, name: doc.name, phone: doc.phone, desired: [], orderMass: orderMass}, {});
            users.loadDatabase();
        }
    }); 
})
app.post('/api/overwriteMass', (request, response)=>{
    users.findOne({email:request.body.data.order},function(err, doc) { 
        if (doc) {
            console.log(doc);
            response.json({doc})
        }
    }); 
})
app.get('/api/getFull', function(request, response){
    users.find({}, function (err, docs) {
        response.json(docs);
        console.log(docs);
    });
});
const start = async ()=>{
    try{
        app.listen(PORT, ()=>{console.log(`server started on PORT ${PORT}`);})
    } catch(e){
        console.log(e);
    }
}
start()