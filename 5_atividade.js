const prompt = require("prompt-sync")();

function isTriagulo(lado1, lado2, lado3) {
  if (lado1 < lado2 + lado3 && lado2 < lado1 + lado3 && lado3 < lado1 + lado2) {
    return true;
  }
  return false;
}

function isIsosceles(lado1, lado2, lado3) {
  if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
    return true;
  }
  return false;
}

function isEscaleno(lado1, lado2, lado3) {
  if (lado1 !== lado2 && lado1 !== lado3 && lado2 !== lado3) {
    return true;
  }
  return false;
}

function isEquilatero(lado1, lado2, lado3) {
  if (lado1 === lado2 && lado2 === lado3) {
    return true;
  }
  return false;
}

let lado1 = Number(prompt("Lado 1 do triagulo"))
let lado2 = Number(prompt("Lado 2 do triangulo"))
let lado3 = Number(prompt("Lado 3 do triangulo"));

const triagulo = isTriagulo(lado1,lado2,lado3)

let escaleno = isEscaleno(lado1,lado2,lado3)
let equilatero = isEquilatero(lado1,lado2,lado3)
let isosceles = isIsosceles(lado1,lado2,lado3)

if(!triagulo){
    console.log("Esses lados não formam um triagulo");
}else if(equilatero){
    console.log("`Triagulo equilatero");
}else if(escaleno){
    console.log("Triagulo escaleno");
}else if(isosceles){
    console.log("Trigulo isosceles");
}