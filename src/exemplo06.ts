function jogaErro(): never {
  throw new Error("erro");
}

let anyEstaDeVolta: any;
anyEstaDeVolta = 3;
anyEstaDeVolta = "teste";
anyEstaDeVolta = true;
anyEstaDeVolta = 2;

let string1: string = anyEstaDeVolta;

console.log(typeof string1);

let unknownVar: unknown;
unknownVar = 3;
unknownVar = "teste";
unknownVar = true;
unknownVar = 2;
unknownVar = "oi";

let string2: string;

if (typeof unknownVar === "string") {
  string2 = unknownVar;
  console.log(string2);
}

jogaErro();
