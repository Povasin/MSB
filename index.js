const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 5000
const http = require('http');
const cors = require('cors')
const bcrypt = require('bcrypt');
var bodyParser = require('body-parser');
app.use(express.static(path.resolve(__dirname, './')));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.get('/', (req, res) => {  
    res.sendFile(path.resolve(__dirname, './index.html')); 
});
app.use(bodyParser.json());
app.use(cors())
app.use(express.json()) 
const Datastore = require('nedb');
const users = new Datastore({filename : './server/orders', autoload: true });
users.loadDatabase();
app.post('/register', function(request, response){  
     try {
        const {email, password, name, phone, desired, orderMass} = request.body.data.order;
        users.findOne({email: email}, function(err, doc) { 
            if (doc) {
                return response.status(400).json("Пользователь с таким email уже существует")
            } else{
                const hashPassword = bcrypt.hashSync(password, 7);
                users.insert({email, password: hashPassword, name, phone, desired, orderMass});
                response.json({email, password: hashPassword, name, phone, desired , orderMass});
            }
            return response.status(500).json({err: "ОШИБКА", server: request.body.data})
        }); 
    } catch (e) {
        console.log(e);
        return response.status(500).json({err: "ОШИБКА в catch", server: request.body.data})
    }
});
app.post('/login', (request, response)=>{
    try {
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
            return response.status(500).json({err: "ОШИБКА", server: request.body.data})
        }); 
    } catch (e) {
        console.log(e);
        return response.status(500).json({err: "ОШИБКА в catch", server: request.body.data})
    }
})
app.post('/adminLogin', (request, response)=>{
    try {
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
            return response.status(500).json({err: "ОШИБКА", server: request.body.data})
        });  
    } catch (e) {
        console.log(e);
        return response.status(500).json({err: "ОШИБКА в catch", server: request.body.data})
    }
})
app.post('/bag', (request, response)=>{
    try {
        const {email,orderMass } = request.body.data.order;
        users.findOne({email: email},function(err, doc) { 
            if (doc) {
                doc.orderMass = orderMass 
                response.json({doc})
                users.update({email: email}, {email: email, password: doc.password, name: doc.name, phone: doc.phone, desired: [], orderMass: orderMass}, {});
                users.loadDatabase();
            }
            return response.status(500).json({err: "ОШИБКА", server: request.body.data})
        }); 
    } catch (e) {
        console.log(e);
        return response.status(500).json({err: "ОШИБКА в catch", server: request.body.data})
    }

})
app.post('/getFullOrderLoginAdmin', (request, response)=>{
    try {
        users.findOne({email: request.body.data.email},function(err, doc) { 
            if (doc) {
                response.json('ok')
                users.update({email: request.body.data.email}, {email: request.body.data.email, password: doc.password, name: doc.name, phone: doc.phone, desired: doc.desired, orderMass: request.body.data.order}, {});
                users.loadDatabase();
            }
            return response.status(500).json({err: "ОШИБКА", server: request.body.data})
        }); 
    } catch (e) {
        console.log(e);
        return response.status(500).json({err: "ОШИБКА в catch", server: request.body.data})
    }

})
app.get('/overwriteMassAdmin', (request, response)=>{
    try {
        users.find({},function(err, doc) { 
            if (doc) {
                response.json({doc})
            }
            return response.status(500).json({err: "ОШИБКА", server: request.body.data})
        }); 
    } catch (e) {
        console.log(e);
        return response.status(500).json({err: "ОШИБКА в catch", server: request.body.data})
    }

})
app.post('/overwriteMass', (request, response)=>{
    try {
        users.findOne({email:request.body.data.order},function(err, doc) { 
            if (doc) {
                response.json({doc})
            }
            return response.status(500).json({err: "ОШИБКА", server: request.body.data})
        }); 
    } catch (e) {
        console.log(e);
        return response.status(500).json({err: "ОШИБКА в catch", server: request.body.data})
    }

})

const start = async ()=>{
try {
    app.listen(PORT, ()=>{
        console.log(`start to http://localhost:${PORT}`);
    })
} 
    catch(e){
    console.log(e);
    }
}
start()
