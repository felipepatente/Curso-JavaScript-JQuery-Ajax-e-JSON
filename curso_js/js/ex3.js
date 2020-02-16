//Exercicio 1
var calcular = document.getElementById("converter");

calcular.onclick = function(){

    var celsius = document.getElementById("temp_celsius").value;
    var resultado  = (9 * celsius / 5) + 32;
    document.getElementById("temp_fahr").innerHTML = resultado;

}

//Exercicio 2
var anosCopa = document.getElementById("anos_copa");


for(i = 1930; i <= 2018; i+= 4){
    var li = document.createElement("li");
    li.innerHTML = i;
    anosCopa.appendChild(li);    
}

//Exercicio 3
document.getElementById("calcular").onclick = function(){
    var n1 = parseFloat(document.getElementById("nota1").value)
    var n2 = parseFloat(document.getElementById("nota1").value)
    var n_faltas = parseFloat(document.getElementById("n_faltas").value)

    var media = (n1 + n2) / 2;
    var presenca = (20 - n_faltas) / 20;

    var resultado = document.getElementById("result");

    if(media < 6.5 && presenca < 0.7){
        resultado.innerHTML = "Motivo de reprovação foi pelo os dois motivos";        
    }else if(media < 6.5){
        resultado.innerHTML = "Motivo de reprovação foi por causa da nota";        
    }else if(presenca < 0.7){
        resultado.innerHTML = "Motivo de reprovação foi por causa de presença";        
    }else{
        resultado.innerHTML = "Aluno aprovado";        
    }
}

//Exercicio 4
var vendas_cursos = [

    {
        'aluno': 'Emmanuel Gomes',
        'data': '10/06/2018',
        'valor': 34.99,
        'reembolso': null
        
    },

    {
        'aluno': 'Carla Dias',
        'data': '10/06/2018',
        'valor': 29.99,
        'reembolso': null
        
    },

    {
        'aluno': 'Rafael Marques',
        'data': '11/06/2018',
        'valor': 39.99,
        'reembolso': '13/06/2018'
        
    },

    {
        'aluno': 'Maria Isabel Pereira',
        'data': '11/06/2018',
        'valor': 29.99,
        'reembolso': null
        
    },

    {
        'aluno': 'Andre Luis Silva',
        'data': '12/06/2018',
        'valor': 34.99,
        'reembolso': null
        
    }

];

var totalVendas = 0;

for(var k = 0; k < vendas_cursos.length; k++){

    if(vendas_cursos[k].reembolso == null){
        
        // Captura a referência da tabela com id “tabela”
        var table = document.getElementById("tabela");
        // Captura a quantidade de linhas já existentes na tabela
        // var numOfRows = table.rows.length;
        // Captura a quantidade de colunas da última linha da tabela
        //  var numOfCols = table.rows[numOfRows-1].cells.length;
        var numOfCols = 3;

        var newRow = table.insertRow(k + 1);

        // Faz um loop para criar as colunas
        for (var j = 0; j < numOfCols; j++) {
            // Insere uma coluna na nova linha 
            newCell = newRow.insertCell(j);
            
            if(j == 0){
                newCell.innerHTML = vendas_cursos[k].aluno;
            }else if(j == 1){
                newCell.innerHTML = vendas_cursos[k].data;
            }else{
                newCell.innerHTML = vendas_cursos[k].valor;
                totalVendas += vendas_cursos[k].valor;
            }
        }                      
    }
}

document.getElementById("total_vendas").innerHTML = totalVendas;