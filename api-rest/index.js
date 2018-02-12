var express = require('express')
var bodyParser = require('body-parser')
var app = express()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.get('/suma/:num1/:num2', function (req, res) {
    var num1 = req.params.num1;
   var num2 = req.params.num2;
   var suma = Number(num1) + Number(num2);
    res.status(200).json(suma);
});

app.get('/resta/:num1/:num2', function (req, res) {
    var num1 = req.params.num1;
    var num2 = req.params.num2;
    var suma = Number(num1) - Number(num2);
    res.status(200).json(suma);
});

app.get('/multiplicacion/:num1/:num2', function (req, res) {
    var num1 = req.params.num1;
    var num2 = req.params.num2;
    var suma = Number(num1) * Number(num2);
    res.status(200).json(suma);
});

app.get('/division/:num1/:num2', function (req, res) {
    var num1 = req.params.num1;
    var num2 = req.params.num2;
    var suma = Number(num1) / Number(num2);
    res.status(200).json(suma);
});

var server = app.listen(3678, function(){
    console.log('Server is listening on port ' + server.address().port);
});
/* callback */
//una funcion de callback, es una funcion que es pasada a otra funcion como parametro, y la funcion callback is ejecutada dentro de la funcion que lo llamo como parametro.

/* ES6 */
//ECMAScript 6 es la nueva version de javascript

/* ES6 Palabras reservadas */
//const significa que el identificador no puede volver a ser asignado
// let cuando se necesita reasignar la variable normalmente para ciclos, solo usada en el bloque que esta definido
// var la variable puede o no ser reasignada y usada, debe ser la menos usada ahora.
