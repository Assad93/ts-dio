"use strict";
function jogaErro() {
    throw new Error("erro");
}
let anyEstaDeVolta;
anyEstaDeVolta = 3;
anyEstaDeVolta = "teste";
anyEstaDeVolta = true;
anyEstaDeVolta = 2;
let string1 = anyEstaDeVolta;
console.log(typeof string1);
let unknownVar;
unknownVar = 3;
unknownVar = "teste";
unknownVar = true;
unknownVar = 2;
unknownVar = "oi";
let string2;
if (typeof unknownVar === "string") {
    string2 = unknownVar;
    console.log(string2);
}
jogaErro();
