var mysql      = require('mysql');


var connection = mysql.createConnection({
host     : 'localhost',
user     : 'root',
password : '',
database : 'api-neemu'
});

         
                /**
                 * 
          .on('end', function(){

                var q = "SELECT * from produto where produto_id in (select id_produto_recomendacao from recomendacao_produto where recomendacao_produto.id_produto_referencia = "+produto.produto_id+")";

                console.log(q);

                connection.query(q, function (error, results, fields) {

                  produto['recomendacoes'] = results;
                  //console.log(produto);

                 

                }) 
                .on('end', function(){

                    //console.log("--", "end");
                    res(produto);
                    
                });



          });




        });
                 */

connection.connect();


var produto = {

    getProdutos: function(limit=25){
       console.log("get-produto");

       var produtos_;
        connection.query('SELECT * from produto' , function (error, results, fields) {
            
            console.log("get-produto", results);
            

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

        return new Promise((res, rej)=>{

            var produto;

            var query_produto = connection.query('SELECT * from produto where produto_id= '+id);
                     
            query_produto.on('result', function(row){

                produto = row;
                produto['recomendacao'] = [];
                var q = "SELECT * from produto where produto_id in (select id_produto_recomendacao from recomendacao_produto where recomendacao_produto.id_produto_referencia = "+produto.produto_id+")";

                var query_recomendacoes = connection.query(q);

                query_recomendacoes.on('result', function(row){

                    produto.recomendacao.push(row);

                });

                query_recomendacoes.on('end', function(){

                    console.log('fim', produto);
                    res(produto);

                });
        

            });

              
          
        });


    },

    addProduto : function ( produto ){

        console.log("add-produto");

        connection.query('insert into produto set ?', produto, function(erro, result, fields){

            if(erro){

                return false;

            }


        }).on('end', function(){

            return true;
        });

        
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

  