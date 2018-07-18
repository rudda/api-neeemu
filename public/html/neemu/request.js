function load(callback) {
    var xhttp;
    var id = document.getElementById("input-search");
    var url = "http://localhost:3000/produtos/"+id.value;

    console.log("url", url);
    xhttp=new XMLHttpRequest();
    
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        callback(this);
      }
    };
    
    xhttp.open('GET', url, true);
    xhttp.setRequestHeader("Access-Control-Allow-Origin", "*");
    xhttp.send();
}
  
function callback(res) {
    
    //console.log(res.responseText);
    var prod = JSON.parse(res.responseText);
    var recomendacoes = prod.recomendacao;
    
    var recomendacao_div = document.getElementById("pure-slider-navigation");
    var produto_div = document.getElementById("fixed-item");   
    var recomendacao_items = '';     

    var div_produto_principal = '<div class="pure-slider-item">'+
    '<img class="pure-slider-item-image" src='+prod.produto_imagem+'>'+
    '<p class="pure-slider-item-description">'+( prod.produto_nome.substring(0, 50) )+'</p>'+
    '<p class="pure-slider-item-price-01">De:'+ ((prod.produto_preco_antigo)/100) +'</p>'+
    '<h3 class="pure-slider-item-price-02">Por:'+ ((prod.produto_preco)/100 )+'</h3>'+
    '<p class="pure-slider-item-price-03">'+prod.produto_condicao_pagamento+'</p>'+
    '</div>';


    for(var i=0; i<recomendacoes.length; i++){

        var prod = recomendacoes[i];
      
        var div_produto_recomendado = '<div class="pure-slider-item">'+
            '<img class="pure-slider-item-image" src='+prod.produto_imagem+'>'+
            '<p class="pure-slider-item-description">'+(prod.produto_nome.substring(0, 100))+'</p>'+
            '<p class="pure-slider-item-price-01">De:'+ ( (prod.produto_preco_antigo)/100) +'</p>'+
            '<h3 class="pure-slider-item-price-02">Por:'+ ((prod.produto_preco)/100)+'</h3>'+
            '<p class="pure-slider-item-price-03">'+prod.produto_condicao_pagamento+'</p>'+
            '</div>';

        recomendacao_items+= div_produto_recomendado;

    }        
            
    recomendacao_div.innerHTML = recomendacao_items; 
    produto_div.innerHTML = div_produto_principal; 
    

}
  