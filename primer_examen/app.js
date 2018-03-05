var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var exa_primer = require('./routes/primerexamen-route');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use('/exa', exa_primer);


module.exports = app;
