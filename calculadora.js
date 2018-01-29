"use strict";
var args = process.argv.slice(2);
var num1 = args[0]
var operator = args[1]
var num2 = args[2]
if(args.length==3){
    switch(operator){
        case 'mas':
            console.log("Suma: "+(Number(num1) + Number(num2)));
            break;
        case 'menos':
            console.log("Resta: "+(Number(num1) - Number(num2)));
            break;
        case 'por':
            console.log("Multiplicación: "+(Number(num1) * Number(num2)));
            break;
        case 'entre':
            console.log("División: "+(Number(num1) / Number(num2)));
            break;
        default:
            console.log("Ponga una operacion basica como mas, menos, entre y por.");
    }
}else{
    console.log("Introduce bien los parámetros");
}