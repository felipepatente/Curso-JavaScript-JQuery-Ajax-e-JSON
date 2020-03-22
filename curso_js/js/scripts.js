//Aula 27 - Métodos de Tempo
console.log("Escrever isso e espera alguns segundos para outro console");

// window.setTimeout(função,tempo em milisegundos)
window.setTimeout(function(){
    console.log("Depois de um tempo apareceu")
}, 10000);

document.getElementById("mostrar-loader").onclick = function () {

    document.getElementById("spinner-loader").style.display = "initial";
    window.setTimeout(function(){
        document.getElementById("spinner-loader").style.display = "none";
    }, 5000);

};


var count = 0;

var inter = window.setInterval(function(){
    console.log(count);
    count++;
    if (count > 10) {
        window.clearInterval(inter);
    }
}, 1000);