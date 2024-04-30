const prompt = require("prompt-sync")();

let nota1 = Number(prompt('Qual a nota da  avaliação 1: '))
let nota2 = Number(prompt('Qual a nota da  avaliação 2: '))

let media = (nota1 + nota2) / 2

if(media >= 6){
    console.log("PARABÉNS! Você foi aprovado")
}else{
    console.log("Você foi REPROVADO! Estude mais");
}
