const prompt = require('prompt-sync')();

function celsiusParaFahrenheit(){

    let celsius = Number(prompt("Informe o valor em graus celsius: "));

    while (isNaN(celsius)) {
      celsius = Number(
        prompt("Por favor informe o graus celsius em formato numerico: ")
      );
    };

    const fahrenheit = celsius  * 1.8 + 32;
    console.log(`${ celsius } graus celsius é equivalente a ${ fahrenheit } fahrenheit`);
};

celsiusParaFahrenheit()