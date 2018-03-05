'use strict'
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = Schema({
    nombre:String,
    direccion:String,
    telefono:String
});

module.exports = mongoose.model('usuarios', UserSchema);