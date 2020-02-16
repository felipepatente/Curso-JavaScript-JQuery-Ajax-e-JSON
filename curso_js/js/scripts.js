var exemplos = document.getElementsByClassName("exemplo");

for(i = 0; i < exemplos.length; i++){
    console.log(exemplos[i].innerHTML);
}

var paragrafos = document.getElementsByTagName("p");

for(i = 0; i < paragrafos.length; i++){
    console.log(paragrafos[i].innerHTML);
}