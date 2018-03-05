'use strict'

var express = require('express');
var exa_controller = require('../controllers/primerexamen-controller');
var exa_primer = express.Router();

exa_primer.get('/prom/:num1/:num2', exa_controller.prom);
exa_primer.get('/elhtml', exa_controller.htmlson);
exa_primer.post('/resta', exa_controller.resta);

module.exports = exa_primer;