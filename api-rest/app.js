//Aqui va toda la configuracion de express, se cargan todas las rutas, body parser

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var api = require('./routes/route-api');
var user = require('./routes/user-route');

app.set("view engine", "pug");
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
var path = require('path');
//todas las rutas van aqui
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/node_modules/bootstrap/dist'));
app.use(express.static(__dirname + '/node_modules/jquery/dist'));
app.use('/api', api);
app.use('/user', user);

// app.get('/', function(req, res) {
//     res.sendFile(path.join(__dirname + '/views/index.html'));
// });

module.exports = app;
