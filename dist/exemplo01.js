"use strict";
const button = document.getElementById("button");
const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
function somarNumeros(n1, n2) {
    return n1 + n2;
}
button === null || button === void 0 ? void 0 : button.addEventListener("click", () => {
    console.log(somarNumeros(Number(input1 === null || input1 === void 0 ? void 0 : input1.value), Number(input2 === null || input2 === void 0 ? void 0 : input2.value)));
});
