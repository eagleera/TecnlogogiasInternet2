//Aqui va toda la configuracion de express, se cargan todas las rutas, body parser

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var api = require('./routes/route-api');

app.set("view engine", "pug");
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
var path = require('path');
//todas las rutas van aqui
app.use('/api', api);
app.get("/homepage", (req, res) => {
    res.render("homepage",{
        vegetables: [
            "carrot",
            "potato",
            "beet"
        ],
        name: "Daniel"
});
});

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/views/index.html'));
});

module.exports = app;
