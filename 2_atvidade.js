const prompt = require("prompt-sync")();

function validarCampo(number, msg) {
  let resultado = number;
  while (isNaN(resultado) || resultado < 0) {
    resultado = parseInt(prompt(msg));
  }
  return resultado
}

let totalPopulacao = parseInt(prompt("Qual a quantidade total de eleitores? "));

const população = validarCampo(
  totalPopulacao,
  "O total da população deve ser um numero valido, informe-o novamente: "
);
totalPopulacao = população;


let totalVotosBrancos = parseInt(
  prompt("Qual a quantidade total de votos brancos? ")
);

const votosbrancos = validarCampo(
  totalVotosBrancos,
  "O total de votos brancos deve ser um numero valido, informe-o novamente: "
);
totalVotosBrancos = votosbrancos;

let totalVotosNulos = parseInt(
  prompt("Qual a quantidade total de votos nulos? ")
);

const votosNulos = validarCampo(
  totalVotosNulos,
  "O total de votos nulos deve ser um numero valido, informe-o novamente: "
);
totalVotosNulos = votosNulos;

let totalVotosValidos = parseInt(
  prompt("Qual a quantidade total de votos validos? ")
);

const votosValidos = validarCampo(
  totalVotosValidos,
  "O total de votos validos deve ser um numero, informe-o novamente: "
);
totalVotosValidos = votosValidos;

let percentualVotosBrancos = (totalVotosBrancos / totalPopulacao) * 100;
let percentualVotosNulos = (totalVotosNulos / totalPopulacao) * 100;
let percentualVotosValidos = (totalVotosValidos / totalPopulacao) * 100;

console.log(`Os votos branco equivalem a ${percentualVotosBrancos}% do votos totais`);
console.log(`Os votos nulos equivalem a ${percentualVotosNulos}% do votos totais`);
console.log(`Os votos validos equivalem a ${percentualVotosValidos}% do votos totais`);