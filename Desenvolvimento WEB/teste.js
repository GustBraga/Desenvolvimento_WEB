var botao = document.getElementById("meuBotao");

function mostrarMensagem() {
    var num1 = parseFloat(document.getElementsByName('1')[0].value);
    var num2 = parseFloat(document.getElementsByName('2')[0].value);
    var soma = num1 + num2;
    alert('A soma dos números é: ' + soma);
}
