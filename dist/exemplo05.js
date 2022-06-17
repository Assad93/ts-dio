"use strict";
function somarValoresETratar(n1, n2, callback) {
    let resultado = n1 + n2;
    return callback(resultado);
}
function aoQuadrado(n) {
    return n * n;
}
function dividirPorEleMesmo(n) {
    return n / n;
}
console.log(somarValoresETratar(2, 1, aoQuadrado));
console.log(somarValoresETratar(1, 2, dividirPorEleMesmo));
