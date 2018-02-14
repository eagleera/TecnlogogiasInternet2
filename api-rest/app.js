//Aqui va toda la configuracion de express, se cargan todas las rutas, body parser

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var api = require('./routes/route-api');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//todas las rutas van aqui
app.use('/api', api);

module.exports = app;
