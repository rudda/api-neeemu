var mysql      = require('mysql');


var connection = mysql.createConnection({
host     : 'localhost',
user     : 'root',
password : '',
database : 'api-neemu'
});

connection.connect();


var produto = {

    getProdutos: function(limit){
       console.log("get-produto");

        connection.query('SELECT * from produto limit 0, '+limit, function (error, results, fields) {
            if (error) return false;

            for(var i =0; i<result.legth; i++){
            
                connection.query('SELECT * from produto limit 0, '+limit, function (error, results_, fields) {

                    results['recomendacao'] = results_;
                        
    
                });
                       

            }
            

            
            console.log("get-produtos", results);
            return results;

          });



    },
    
    getProdutosById: function (id){

        console.log("get-produto");

        var produto;

        connection.query('SELECT * from produto where produto_id= '+id, function (error, results, fields) {
                
            if (error) {
                
                console.log("error");
            
                return false;
            
            }

          
                console.log("get-produtos", results);
                produto = results;

          }).on('end', function(){

            connection.query('SELECT * from produto where produto_id in (select id_produto_recomendacao from recomendacao_produto where recomendacao_produto.id_produto_referencia = produto.produto_id) and produto_id = '+id, function (error, results_, fields) {

                produto['recomendacoes'] = results_;
               
                console.log("query", produto);

                return produto;

            });



          });



    },

    addProduto : function ( produto ){
        
        console.log("add-produto");

    },

    addRecomendacaoProduto : function(produto_id, produto_recomendacao){

        console.log("add-recomendacao");


    }
    

}



module.exports= produto;

  