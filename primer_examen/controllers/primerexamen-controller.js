var path = require('path');

function prom(req, res){
    var n1 = parseInt(req.params.num1);
    var n2 = parseInt(req.params.num2);
    var result = (n1+n2)/2;
    res.status(200).send({promedio: result});
}

function resta(req, res){
    var params = req.body;
    var n1 = parseInt(params.num1);
    var n2 = parseInt(params.num2);
    var result = n1-n2;
    res.status(200).send({resta: result});
}

function htmlson(req, res){
    res.sendFile('/index.html' , { root : 'views'});
}

// noinspection JSAnnotator
module.exports = {
    prom,
    resta,
    htmlson
}