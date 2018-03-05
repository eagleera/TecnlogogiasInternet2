'use strict'

var express = require('express');
var favController = require('../controllers/controller-api');
var favorito2Controller = require('../controllers/favorito-controller');
var userController = require('../controllers/user-controller');
var api = express.Router();

api.get('/prueba/:num1/:num2', favController.prueba);
api.get('/getfav/:id', favController.getFav);
api.post('/postfav', favController.postFav);
api.post('/postSuma', favController.postSuma);
api.post('/postResta', favController.postResta);
api.post('/postMultip', favController.postMultip);
api.post('/postDiv', favController.postDiv);
api.post('/MongoFav', favorito2Controller.saveFavorito);
api.get('/FavList', favorito2Controller.listFavorito);
api.get('/FavOne/:id', favorito2Controller.oneFavorito);
api.put('/UpdateFav/:id', favorito2Controller.updateFavorito);
api.delete('/deleteFav/:id', favorito2Controller.deleteFav);
api.post('/createUser', userController.createUser);
api.get('/readUser', userController.readUser);
api.put('/updateUser/:id', userController.updateUser);
api.delete('/deleteUser/:id', userController.deleteUser);
module.exports = api;