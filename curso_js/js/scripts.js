$("#esconder").click(function(){
    $(".exemplo").css("display","none");
});

var html = $("#paragrafo-html").html();
var text = $("#paragrafo-html").text();
console.log(html);
console.log(text);
$("#paragrafo-html").html("Testando");

var url_link = $("#paragrafo-link").attr("href");
console.log(url_link);

$("#paragrafo-link").attr("href","http://www.udemy.com.br");

var url_link = $("#paragrafo-link").attr("href");
console.log(url_link);

$("#mudar_imagem").click(function(){
    $("#imagem_js").attr("src", "https://cdn.tutsplus.com/net/uploads/2013/12/managing-async-nodejs-retina-preview.png");
    $("#mudar_imagem").hide();
});

// $("#paragrafo-empty").empty();

$("#paragrafo-empty").remove();

///////////////////////////////////////////////////////////////////////////////////////////////////////////

var lista = ["HTML","CSS","Javascript", "jQuery", "PHP"];

$.each(lista, function( indice, valor ) {
    console.log('O elemento de índice [' + indice + '] tem o valor de ' + valor);
});
  

var pessoa = {
    'nome': 'João Pedro',
    'DN': '20/01/1990',
    'CPF': '111.111.111-11'
};

$.each(pessoa, function( chave, valor ) {
    console.log('O elemento de chave [' + chave + '] tem o valor de ' + valor);
});


//Meu objeto, meu exemplo
var carro = {
    "Cor": "Preto",
    "Modelo": "Civic",
    "Marca": "Honda"
}

$.each(carro, function(chave, valor){
    console.log('O elemento de chave [' + chave + '] tem o valor de ' + valor);
});

var interesses = $("#interesses li");

$.each(interesses, function(chave, valor){
    console.log($(valor).text());    
});