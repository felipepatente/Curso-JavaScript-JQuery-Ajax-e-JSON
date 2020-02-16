 document.getElementById("click-me").onclick = function(){
    alert("Você clicou no botão");
 };

 document.getElementById("hover-me").onmouseover = function(){
    alert("você com o cursor no botão");
 };

 document.getElementById("leave-me").onmouseout = function(){
    alert("Você passou o cursor por cima do botão e depois saiu");
 };

 document.onkeydown = function() {
    alert('Você apertou a tecla: ' + event.keyCode);
};

function showMessage(){
    alert("Você clicou");
}