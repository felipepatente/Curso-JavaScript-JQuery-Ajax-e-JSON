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