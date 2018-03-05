'use strict'
//se carga archivo app.js
var app = require('./app');
const mongoose = require('mongoose');

var port = process.env.port || 3000;

mongoose.connect('mongodb://localhost:27017/api_rest', (err,res) => {
    if(err){
        throw err;
    }else{
        console.log("Conexion a mongo exitosa");
        app.listen(port, function () {
            console.log(`API REST FUNCIONANDO en ${port}`);
        });
    }
});

//https://github.com/eagleera/TecnologiasInternet2/tree/master/api-rest