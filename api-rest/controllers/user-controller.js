var User = require('../models/user-model');

function createUser(req,res){
    var user = new User();

    var params = req.body;

    user.nombre = params.nombre;
    user.direccion = params.direccion;
    user.telefono = params.telefono;

    user.save((err, userStored) => {

        if(err){
            res.status(500).send({message:"Error al guardar"})
        }

        res.status(200).send({user: userStored});
    });
}

function readUser(req, res){
    User.find({}, function (err, posts) {
        res.status(200).send({users: posts});
    });
}

function updateUser(req, res){
    var userId = req.params.id;
    var updateInfo = req.body;
    User.findByIdAndUpdate(userId, updateInfo, function (err, users) {
        if(!users){
            res.status(404).send("No se encontro el id");
        }
        if (err){
            res.status(500).send("ERROR DEL SERVIDOR");
        }
        res.status(200).send(users);
    });
}

function deleteUser(req,res){
    var userId = req.params.id;
    User.findOneAndRemove({_id: userId}, function (err) {
        if (err) {
            res.status(500).send("ERROR DEL SERVIDOR");
        }
        res.status(200).send("Se ha borrado el Id");
    });
}

module.exports = {
    createUser,
    readUser,
    updateUser,
    deleteUser
};