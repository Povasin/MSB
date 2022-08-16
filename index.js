const express = require('express')
const path = require('path');
const PORT = process.env.PORT || 5000
const app  = express()
const http = require('http').Server(app);
app.use(express.static(path.resolve(__dirname, './')));
app.use(express.json())
const Datastore = require('nedb');
const db_orders = new Datastore({filename : './server/orders'});
db_orders.loadDatabase();
app.get('/', (req, res) => {  
    res.sendFile(path.resolve(__dirname, './index.html')); //Когда на сервер делается запрос, index.html файл обслуживается.
});
app.post('/api/addOrder', function(request){  
    db_orders.find({email: request.body.data.order.email}, function (err, docs) {
        console.log(docs);
        if (request.body.data.order.email != docs) {
            db_orders.insert(request.body.data.order); //пушим обьект user
        } 
        else{
            //ЧТО ДЕЛАТЬ
        }
    });

});
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