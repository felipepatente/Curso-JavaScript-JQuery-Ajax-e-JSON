//Aula 25 LocalStorage
// window.localStorage.setItem("nome", "ivan");
// console.log(localStorage["nome"]);
// localStorage.removeItem("nome");

document.getElementById("enviar-nome").onclick = function(){

    //guardar o nome digitado em local storage
    var nome = document.getElementById("nome-usuario").value;
    window.localStorage.setItem("nome",nome);    

    //escodendo o formulario e mostrando a areas de boas vindas
    MostrarEsconderCampos("none", "initial");        

    //Mostrando o nome que foi preenchido no formulario
    document.getElementById("welcome-text").innerHTML = "Olá " + localStorage["nome"] + ", tudo bem?";
    document.getElementById("not-me").innerHTML = "Não é " + localStorage["nome"];

}   

document.getElementById("not-me").onclick = function(){
    localStorage.removeItem("nome")
    MostrarEsconderCampos("initial", "none");
}

if(localStorage.nome){
    MostrarEsconderCampos("none", "initial");     
    
    //Mostrando o nome que foi preenchido no formulario
    document.getElementById("welcome-text").innerHTML = "Olá " + localStorage["nome"] + ", tudo bem?";
    document.getElementById("not-me").innerHTML = "Não é " + localStorage["nome"];
}

function MostrarEsconderCampos(campo, area){
    document.getElementById("name-field").style.display = campo;
    document.getElementById("welcome-area").style.display = area;
}
