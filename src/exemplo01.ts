const button = document.getElementById("button");
const input1 = document.getElementById("input1") as HTMLInputElement;
const input2 = document.getElementById("input2") as HTMLInputElement;

function somarNumeros(n1: number, n2: number) {
  return n1 + n2;
}

button?.addEventListener("click", () => {
  console.log(somarNumeros(Number(input1?.value), Number(input2?.value)));
});
