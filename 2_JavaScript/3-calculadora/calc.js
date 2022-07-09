function calculadora() {
    //const OPERACAO = Number(prompt('Escolha uma opção:\n 1 - soma (+)\n 2 - subtração (-)\n 3 - multiplicação (*)\n 4 - divisão (/)'));
    let number1 = Number(prompt('Digite o primeiro valor'));
    let number2 = Number(prompt('Digite o segundo valor'));
    let result;

    function soma() {
        result = number1 + number2;
        alert(`${number1} + ${number2} = ${result}`);
    }
    soma();
}

calculadora();