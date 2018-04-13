var User = require('../models/user-model');

function readCreateUser(req, res){
    res.status(200).render('userCreate', {title: "Create usuario"});
}

function createUser(req,res){
    var user = new User();

    var params = req.body;

    user.nombre = params.nombre;
    user.direccion = params.direccion;
    user.telefono = params.telefono;
    if(params.activo==undefined){
        params.activo = false;
    }
    user.activo = params.activo;
    user.save((err, userStored) => {

        if(err){
            res.status(500).send({message:"Error al guardar"})
        }

        res.redirect('../list');
    });
}

function readUser(req, res){
    User.find({}, function (err, posts) {
        if(err){
            res.status(500).send({message:"error al devolver los usuarios"})
        }
        if(!posts){
            res.status(404).send({message:"no se encontraron registros"})
        }
        res.status(200).render('userList', {title: "Lista de usuario", usuarios: posts})
    });
}

function readUpdateUser(req, res){
    var userId = req.params.id;
    User.findById(userId, function (err, posts) {
        // if (posts){
        //     res.status(500).send("error al devolver usuario");
        // }
        res.status(200).render('userUpdate', {title: "Update usuario", usuarios: posts})
    });
}

function updateUser(req, res){
    var userId = req.params.id;
    var updateInfo = req.body;
    if(updateInfo.activo==undefined){
     updateInfo.activo = false;
    }
    User.findByIdAndUpdate(userId, updateInfo, function (err, users) {
        if(!users){
            res.status(404).send("No se encontro el id");
        }
        if (err){
            res.status(500).send("ERROR DEL SERVIDOR");
        }
        res.redirect('../list');
    });
}

function deleteUser(req,res){
    var userId = req.params.id;
    User.findOneAndRemove({_id: userId}, function (err) {
        if (err) {
            res.status(500).send("ERROR DEL SERVIDOR");
        }
        res.redirect('../list');
    });
}

module.exports = {
    createUser,
    readUser,
    updateUser,
    deleteUser,
    readUpdateUser,
    readCreateUser
};