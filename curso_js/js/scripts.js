$(document).ready(function(){

    // $("#esconder").click(function(){
    //     $(".exemplo").css("display","none");
    // });
    
    // var html = $("#paragrafo-html").html();
    // var text = $("#paragrafo-html").text();
    // console.log(html);
    // console.log(text);
    // $("#paragrafo-html").html("Testando");
    
    // var url_link = $("#paragrafo-link").attr("href");
    // console.log(url_link);
    
    // $("#paragrafo-link").attr("href","http://www.udemy.com.br");
    
    // var url_link = $("#paragrafo-link").attr("href");
    // console.log(url_link);
    
    // $("#mudar_imagem").click(function(){
    //     $("#imagem_js").attr("src", "https://cdn.tutsplus.com/net/uploads/2013/12/managing-async-nodejs-retina-preview.png");
    //     $("#mudar_imagem").hide();
    // });
    
    // // $("#paragrafo-empty").empty();
    
    // $("#paragrafo-empty").remove();
    
    // ///////////////////////////////////////////////////////////////////////////////////////////////////////////
    
    // var lista = ["HTML","CSS","Javascript", "jQuery", "PHP"];
    
    // $.each(lista, function( indice, valor ) {
    //     console.log('O elemento de índice [' + indice + '] tem o valor de ' + valor);
    // });
      
    
    // var pessoa = {
    //     'nome': 'João Pedro',
    //     'DN': '20/01/1990',
    //     'CPF': '111.111.111-11'
    // };
    
    // $.each(pessoa, function( chave, valor ) {
    //     console.log('O elemento de chave [' + chave + '] tem o valor de ' + valor);
    // });
    
    
    // //Meu objeto, meu exemplo
    // var carro = {
    //     "Cor": "Preto",
    //     "Modelo": "Civic",
    //     "Marca": "Honda"
    // }
    
    // $.each(carro, function(chave, valor){
    //     console.log('O elemento de chave [' + chave + '] tem o valor de ' + valor);
    // });
    
    // var interesses = $("#interesses li");
    
    // $.each(interesses, function(chave, valor){
    //     console.log($(valor).text());    
    // });
    
    // //////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // var conteudo_input = $("#campo_nome").val();
    // console.log(conteudo_input);
    
    
    // /////////////////////////////////////////////////////////////////////////////////////////////////////////////
    
    // $("#options").change(function(){
    //     var novo_selecionado = $('#options').find(":selected").text();
    //     console.log(novo_selecionado);
    // })
    
    // var valor_radio_selecionado = $("input[name='genero']:checked").val();
    // console.log(valor_radio_selecionado);
    
    // $("input[name='genero']").change(function() {
    
    //     var novo_radio_selecionado = $("input[name='genero']:checked").parent('span').text();;
    //     console.log(novo_radio_selecionado);
    
    // });
    
    // $("input[name='interesse']").change(function() {
    
    //     var checkboxes_selecionados = $("input[name='interesse']:checked");
    //     var textos = [];
        
    //     $.each(checkboxes_selecionados, function( index, value ) {
            
    //         textos.push($(value).parent("span").text());
        
    //     });
        
    //     console.log(textos);
        
    // });
    
    // ////////////////////////////////////////////////////////////////////////////////////////////////
    
    // $("#adicionar_classe").click(function(){
    //     $("#paragrafo-classes").addClass("styling");
    // });
    
    // // Remover classe:
    // $("#remover_classe").click(function(){
    //     $("#paragrafo-classes").removeClass("styling");
    // });
    
    // // Alternar classe:
    // $("#alternar_classe").click(function(){
    //     $("#paragrafo-classes").toggleClass("styling");
    // }); 

    // $("#nome").on({
        
    //     keypress: function(){
    //         $("#confirmar").css("display", "block");
    //     }, 

    //     keydown: function(){
           
    //         var valor = $("#nome").val();

    //         if(valor == ""){
    //             $("#confirmar").css("display", "none"); 
    //         }
    //     }, 
    // });

    // $("#botao-esconder").click(function(){
    //     $(this).hide(1000, function(){
    //         $("#texto-escondido").show();
    //     });        
    // });

    // $("#toggle-tab").click(function() {

    //     $("#tab-content").toggle();
    //     $("#toggle-tab").toggleClass("flip");
        
    // });

    // $("#animar").click(function(){

    //     $("#quadrado")
    //         .animate({width: '+=20px'},500)
    //         .animate({height: '+=20px'},500, 
    //             function() {
    //                 $("#quadrado").css('background-color', 'green')
    //             }
    //         )
    //         .animate({borderRadius: '20px'});
    // });


    ///////////////////////////////////////////////////////////////////////////////////////////////////
    // function pegar_usuario(callback){

    //     window.setTimeout(function(){
            
    //         var u = {
    //             'nome': 'João'
    //         };
            
    //         callback(u);

    //     },2000);
    // }
            
    // function saudar_usuario(user) {
    //     console.log('Olá ' + user.nome + ', como vai?');
    // }
            
    // pegar_usuario(saudar_usuario);

    // pegar_usuario(function(user){
    //     console.log("Bom dia " + user.nome);
    // });
    
    ////////////////////////////////////////////////////////////////////////////////////////////////////////

    // function pegar_usuario(){

    //     window.setTimeout(function(){
    //         var u = {
    //             'nome': 'João'
    //         };
    //         return u;
    //     }, 1000);
    // }
            
    // function saudar_usuario(user) {
    //     console.log('Olá ' + user.nome + ', como vai?');
    // }
    
    // var user = {"nome":""}

    // try{
        
    //     if(user.nome == ''){
    //         throw 'Nome em branco';
    //     }

    //     saudar_usuario(user);

    // }catch(err){
    //     console.log(err);
    // }

    // console.log('Novo comando para executar ao final');

    //////////////////////////////////////////////////////////////////////////////////////////////////////
    // var nome = "";
    // var mensagem = nome ? "Olá " + nome : "Nome não informado";
    // console.log(mensagem);

    // function criar_nome() {
    //     nome = 'Maria';
    //     console.log(nome); 
    // }
    // criar_nome();
    // console.log(nome);

    ////////////////////////////////////////////////////////////////////////////////////////////////////
    
    // // var meuWebApp = {

    // //     nome: "Felipe",

    // //     ver_nome: function() {
    // //         console.log(this.nome)
    // //     }
    // // };

    // var meuWebApp = {};

    // meuWebApp.nome = "Felipe";
    
    // meuWebApp.ver_nome = function() {
    //     console.log(this.nome);
    // };

    // meuWebApp.ver_nome(); // O console mostrará 'Felipe'

    ////////////////////////////////////////////////////////////////////////////////////////////////////

    // var funcionario = {
    //     'nome': "Fernanda Costa",
    //     'd_nascimento': '1988-10-01',
    //     'CPF': '111.111.111-11'
    // };

    // var funcionario_json = JSON.stringify(funcionario);
    
    // var funcionario_obj = JSON.parse(funcionario_json);

    // console.log(funcionario_obj.nome);

    // var info_temp = '{"coord":{"lon":-0.13,"lat":51.51},"weather":[{"id":300,"main":"Drizzle","description":"light intensity drizzle","icon":"09d"}],"base":"stations","main":{"temp":280.32,"pressure":1012,"humidity":81,"temp_min":279.15,"temp_max":281.15},"visibility":10000,"wind":{"speed":4.1,"deg":80},"clouds":{"all":90},"dt":1485789600,"sys":{"type":1,"id":5091,"message":0.0103,"country":"GB","sunrise":1485762037,"sunset":1485794875},"id":2643743,"name":"London","cod":200}';
    // var info = JSON.parse(info_temp);

    // console.log("Cood" + info.coord.lon);
    // console.log("A umidade é de " + info.main.humidity + "%");

    ////////////////////////////////////////////////////////////////////////////////////////////////////

    // var xhttp = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");

    // xhttp.onreadystatechange = function() {
    //     if (this.readyState == 4 && this.status == 200) {
    //         console.log(this.responseText);
    //     }
    // };

    // xhttp.open("GET", "https://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=439d4b804bc8187953eb36d2a8c26a02");    
    // xhttp.send();


    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    function mostrar_temperatura(dados) {
        var dados_obj = JSON.parse(dados);
        console.log('A temperatura em Londres neste momento é de ' + dados_obj.main.temp + " graus Celsius.")
    }

    function tempo_londres(callback) {
        var xhttp = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
                        
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                callback(this.responseText);
                
            } 
        };
        xhttp.open("GET", "https://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=439d4b804bc8187953eb36d2a8c26a02");
        xhttp.send();
    }

    tempo_londres(mostrar_temperatura);

});

