function prueba(req, res){
    var num1 = parseInt(req.params.num1);
    var num2 = parseInt(req.params.num2);
    res.status(200).send({texto: num1+num2});
}

function getFav(req, res){
    var favId = req.params.id;
    res.status(200).send({favorito: favId});
}

function postFav(req, res){
    var params = req.body;
    res.status(200).send(params);
}

function postSuma(req, res){
    var params = req.body;
    var num1 = parseInt(params.num1);
    var num2 = parseInt(params.num2);
    var suma = num1+num2;
    res.status(200).send({sum: suma});
}

function postResta(req, res){
    var params = req.body;
    var num1 = parseInt(params.num1);
    var num2 = parseInt(params.num2);
    var resta = num1-num2;
    res.status(200).send({sum: resta});
}

function postMultip(req, res){
    var params = req.body;
    var num1 = parseInt(params.num1);
    var num2 = parseInt(params.num2);
    var multip = num1*num2;
    res.status(200).send({sum: multip});
}

function postDiv(req, res){
    var params = req.body;
    var num1 = parseInt(params.num1);
    var num2 = parseInt(params.num2);
    var div = num1/num2;
    res.status(200).send({sum: div});
}



// noinspection JSAnnotator
module.exports = {
    prueba,
    getFav,
    postFav,
    postSuma,
    postResta,
    postMultip,
    postDiv
}