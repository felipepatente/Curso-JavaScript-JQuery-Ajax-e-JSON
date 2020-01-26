var n1 = parseFloat(document.getElementById("num_1").innerText);
var n2 = parseFloat(document.getElementById("num_2").innerText);

var resultado = n1 + n2;

document.getElementById("resultado").innerHTML = resultado

var cels = document.getElementById("caixa_azul").innerText;

document.getElementById("caixa_amarela").innerText = conversao(cels);

function conversao(celsius){
    return (9 * celsius / 5) + 32;
}

var html = '<h1></h1>';

document.getElementById("tabela").innerText = html;

