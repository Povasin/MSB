const express = require('express')
const path = require('path');
const PORT = process.env.PORT || 5000
const app  = express()
const http = require('http').Server(app);
app.use(express.static(path.resolve(__dirname, './')));
app.use(express.json())
var Datastore = require('nedb');
var db_orders = new Datastore({filename : './server/orders'});
db_orders.loadDatabase();
app.get('/', (req, res) => {  
    res.sendFile(path.resolve(__dirname, './index.html')); //Когда на сервер делается запрос, index.html файл обслуживается.
});
app.post('/api/addOrder', function(request){  
    db_orders.insert(request.body.data.order); //получаем обьект user
});

// не понял
app.post('/api/findDates', function(request, response){
    db_orders.find({fullDate: request.body.data.data}, function (err, docs) {
        response.json(docs);
        console.log(docs);
    });
});
// не понял
app.get('/api/getFull', function(request, response){
    db_orders.find({}, function (err, docs) {
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