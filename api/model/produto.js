var mysql      = require('mysql');


var connection = mysql.createConnection({
host     : 'localhost',
user     : 'root',
password : '',
database : 'api-neemu'
});

connection.connect();


var produto = {

    getProdutos: function(limit=25){
       console.log("get-produto");

       var produtos_;
        connection.query('SELECT * from produto limit 0, '+limit, function (error, results, fields) {
            if (error) return false;
            

          }).on('result', function(row){
            
            console.log("stream", row);
            var aux = row;
            var recomendacao;

            connection.query('SELECT * from produto where produto_id in (select id_produto_recomendacao from recomendacao_produto where recomendacao_produto.id_produto_referencia = produto.produto_id) and produto_id = '+row.produto_id, function (error, results_, fields) {

                if(error) return false;
                
                recomendacao = results_;

            }).on('end', function(){
              
                aux['recomendacoes'] = recomendacao;
                produtos_.push(aux);

                console.log("push", produtos_);

            });
                   

        }).on('end', function(){

            console.log("end", produtos_);

            return produtos_;

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

        if(produto_id != produto_recomendacao){

            connection.query('insert into recomendacao_produto set ?',{id_produto_recomendacao : produto_id, id_produto_referencia : produto_recomendacao}, function (error, results, fields) {

               if(error) return false;

            }).on('end', function(){
                
              return true;

            });



        }else{

            return false;
            console.log("erro", "ids iguais");

        }
        

    }
    

}



module.exports= produto;

  