//Exercício 01
document.getElementById("estados").onchange = function(){
    
    var estadoSelecionado = document.getElementById("estados").value;
    window.localStorage.setItem("estado",estadoSelecionado); 
}

document.getElementById("estados").value = localStorage["estado"];


//Exercício 02
document.getElementById("confirmar_pedido").onclick = function(){
    
    var data = new Date();
    var dataAtual = data.getDate() + "/" + (data.getMonth() + 1) + "/" + data.getFullYear();

    var formaDeEnvio = document.getElementById("envios").value;
    var dataEntrege = "";

    if(formaDeEnvio == "normal"){

        if((data.getDate() + 18) > 31){
            dataEntrege = (data.getDate() + 18 - 31) + "/" + (data.getMonth() + 2) + "/" + data.getFullYear();
        }else{
            dataEntrege = (data.getDate() + 18) + "/" + (data.getMonth() + 1) + "/" + data.getFullYear();
        }
        
    }else if(formaDeEnvio == "express"){

        if((data.getDate() + 12) > 31){
            dataEntrege = (data.getDate() + 12 - 31) + "/" + (data.getMonth() + 2) + "/" + data.getFullYear();
        }else{
            dataEntrege = (data.getDate() + 12) + "/" + (data.getMonth() + 1) + "/" + data.getFullYear();
        }
    }

    document.getElementById("data_pedido").innerHTML = dataAtual;
    document.getElementById("data_entrega").innerHTML = dataEntrege;

}

//Exercício 03
var carros = [

    {
        'placa': 'AAA-0198',
        'categoria': '1',
    },

    {
        'placa': 'HBP-2837',
        'categoria': '2',
    },

    {
        'placa': 'PLQ-0928',
        'categoria': '4',
    },

    {
        'placa': 'KQE-2093',
        'categoria': '5',
    },

    {
        'placa': 'AMR-9087',
        'categoria': '5',
    },

    {
        'placa': 'BQE-8111',
        'categoria': '3',
    },

    {
        'placa': 'GXL-9001',
        'categoria': '2',
    },

    {
        'placa': 'KPM-7740',
        'categoria': '1',
    }
];

var soma = 0;

for(i = 0; i < carros.length; i++){
    
    switch (carros[i].categoria) {
        case '1':
            soma += 11.22;
            break;
        case '2':
            soma += 22.45;
            break;
        case '3':
            soma += 16.88;
            break;
        case '4':
            soma += 33.65;
            break;        
    } 
}

document.getElementById("faturamento_total").innerHTML = soma;