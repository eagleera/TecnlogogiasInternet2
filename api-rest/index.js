'use strict'
//se carga archivo app.js
var app = require('./app');

var port = process.env.port || 3000;

app.listen(port, function () {
    console.log(`Api Rest funcionando en ${port}`);
})

//https://github.com/eagleera/TecnologiasInternet2/tree/master/api-rest