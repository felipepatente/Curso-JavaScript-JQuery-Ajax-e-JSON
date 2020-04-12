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
    function pegar_usuario(callback){

        window.setTimeout(function(){
            
            var u = {
                'nome': 'João'
            };
            
            callback(u);

        },2000);
    }
            
    // function saudar_usuario(user) {
    //     console.log('Olá ' + user.nome + ', como vai?');
    // }
            
    // pegar_usuario(saudar_usuario);

    pegar_usuario(function(user){
        console.log("Bom dia " + user.nome);
    });
    
});