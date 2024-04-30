const prompt = require("prompt-sync")();

function outputNumber(posicaoNumerica) {
  let number = Number(prompt(`Digite o valo do ${posicaoNumerica}° inteiro: `));

  while (!Number.isInteger(number)) {
    number = Number(
      prompt(`Digite um valor inteiro valido para o ${posicaoNumerica}° numero: `)
    );
  }
  return number
}

function operaceosMath(n1, n2, n3, n4) {
  return {
    soma: n1 + 25,
    triplo: n2 * 3,
    porcetagem: (n3 * 0.12).toFixed(2),
    totalN_N3: n1 + n2 + n3,
  };
}

let numero1 = outputNumber(1);
let numero2 = outputNumber(2);
let numero3 = outputNumber(3);
let numero4 = outputNumber(4);

const resultados = operaceosMath(numero1, numero2, numero3, numero4);

console.log(`1° inteiro mais 25 = ${resultados.soma}`);
console.log(`O triplo do 2° inteiro = ${resultados.triplo}`);
console.log(`12% do 3° inteiro = ${resultados.porcetagem}`);
console.log(`O 1° 2° e 3° inteiros somados é = ${resultados.totalN_N3}`);
