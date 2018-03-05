var Favorito = require('../models/favorito');

function saveFavorito(req, res) {
    var favorito = new Favorito();

    var params = req.body;

    favorito.title = params.title;
    favorito.description = params.description;
    favorito.url = params.url;

    favorito.save((err,favoritoStored) => {

        if(err){
            res.status(500).send({message:"Error al guardar"})
        }

        res.status(200).send({favorito: favoritoStored});
    });
};

function listFavorito(req, res) {
    Favorito.find({url: 'aquivalaurl'}, function (err, posts) {
        res.status(200).send({users: posts});
    });
}


function oneFavorito(req, res){
    var favId = req.params.id;
    Favorito.findById(favId, function(err, user){
        if(!user){
            res.status(404).send("usuario no encontrado en la base de datos");
        }
        if(err){
            res.status(500).send("error de parte del servidor");
        }
        res.status(200).send(user);
    });
}

function updateFavorito(req, res){
    var favId = req.params.id;
    var update = req.body;
    Favorito.findByIdAndUpdate(favId, update, { new: true }, function (err, favorito) {
        if(!favorito){
            res.status(404).send("No se encontro el id");
        }
        if (err){
            res.status(500).send("ERROR DEL SERVIDOR");
        }
        res.status(200).send(favorito);
    });
}

function deleteFav(req, res) {
    var favId = req.params.id;
    Favorito.findOneAndRemove({_id: favId}, function (err) {
        if (err) {
            res.status(500).send("ERROR DEL SERVIDOR");
        }
        res.status(200).send("Se ha borrado el Id");
    });
}

module.exports = {
    saveFavorito,
    listFavorito,
    oneFavorito,
    updateFavorito,
    deleteFav
}