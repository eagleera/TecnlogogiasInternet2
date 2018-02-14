'use strict'

var express = require('express');
var favController = require('../controllers/controller-api');
var api = express.Router();

api.get('/prueba/:num1/:num2', favController.prueba);
api.get('/getfav/:id', favController.getFav);
api.post('/postfav', favController.postFav);
api.post('/postSuma', favController.postSuma);
api.post('/postResta', favController.postResta);
api.post('/postMultip', favController.postMultip);
api.post('/postDiv', favController.postDiv);

module.exports = api;