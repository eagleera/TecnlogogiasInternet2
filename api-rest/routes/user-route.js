'use strict'

var express = require('express');
var userController = require('../controllers/user-controller');
var userRouter = express.Router();

userRouter.get('/insert', userController.readCreateUser);
userRouter.post('/insert', userController.createUser);
userRouter.get('/list', userController.readUser);
userRouter.get('/update/:id', userController.readUpdateUser);
userRouter.post('/update/:id', userController.updateUser);
userRouter.get('/delete/:id', userController.deleteUser);
module.exports = userRouter;