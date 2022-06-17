function somarValoresETratar(
  n1: number,
  n2: number,
  callback: (n: number) => number
): number {
  let resultado = n1 + n2;
  return callback(resultado);
}

function aoQuadrado(n: number): number {
  return n * n;
}

function dividirPorEleMesmo(n: number): number {
  return n / n;
}

console.log(somarValoresETratar(2, 1, aoQuadrado));
console.log(somarValoresETratar(1, 2, dividirPorEleMesmo));
