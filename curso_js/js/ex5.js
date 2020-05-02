function mostrarPaises(dados) {
    var paises = JSON.parse(dados);
    var opcoes = "";

    for(var i = 0; i < paises.length; i++){                
         opcoes += "<option>"+ paises[i].name +"</option>"
    }

    document.getElementById("paises").innerHTML = opcoes;

}

function GetPaises(callback) {
    var xhttp = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
                    
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            callback(this.responseText);
            
        } 
    };
    xhttp.open("GET", "https://restcountries.eu/rest/v2/all");
    xhttp.send();
}

GetPaises(mostrarPaises);
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var cursos = [
    {
        "titulo": "PHP",
        "aval": []
    },
    {
        "titulo": "Javascript",
        "aval": [5,5,4.5,4,5,5,5,4.5]
    },
    {
        "titulo": "Python",
        "aval": [5,5,4,4,5,3,5,4,4,5]
    },
    {
        "titulo": "Machine Learning",
        "aval": [5,5,4.5]
    }
];

function VerificarArray(cursos){

    for(var i = 0; i < cursos.length; i++){
        
        if(cursos[i].aval.length == 0){
            console.log("Curso não possui nenhuma avaliação");
        }
    
        if(cursos[i].aval.length < 5 && cursos[i].aval.length != 0){
            console.log("Curso não tem avaliações suficientes");
        }

        if(cursos[i].aval.length >= 5){
            
            var soma = 0;
            var tamanhoArray = cursos[i].aval.length;

            for(var j = 0; j < tamanhoArray; j++){
                soma += cursos[i].aval[j];
            }

            var media = soma / tamanhoArray;

            console.log(media);

        }
    }
}

VerificarArray(cursos);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var nomes = [

    {
        "nome": "João Gomes"
    },

    {
        "nome": "Maria Luisa"
    },

    {
        "nome": "Pedro Henqrique"
    },

    {
        "nome": "Paula Carvalho"
    },

]

var acessoUsuarios = [

    {
        "usuario": "33884h",
        "data": "10/07/18",
        "nome": nomes[0].nome
    },
    {
        "usuario": "33884h",
        "data": "11/07/18",
        "nome": nomes[0].nome
    },
    {
        "usuario": "3585f",
        "data": "19/07/18",
        "nome": nomes[0].nome
    },
    {
        "usuario": "93661h",
        "data": "24/07/18",
        "nome": nomes[2].nome
    },
    {
        "usuario": "23172g",
        "data": "13/08/18",
        "nome": nomes[3].nome        
    },
    {
        "usuario": "93661h",
        "data": "14/08/18",
        "nome": nomes[2].nome
    }
];

var acessos = "";

for(var i = 0; i < acessoUsuarios.length; i++){

    acessos += "<p> Acesso de "+ acessoUsuarios[i].nome +", no dia "+ acessoUsuarios[i].data +"</p>"

}

document.getElementById("acessos").innerHTML = acessos;

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////