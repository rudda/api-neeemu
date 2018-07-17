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

       var produtos_ = []; //array de produtos

       return new Promise( (res, rej)=>{
        
       var query_produtos =   connection.query('SELECT *, (SELECT COUNT(*) from produto) as contador  from produto');
       var count = 0;
       var index_produto=0; 
      
       query_produtos.on('result', function(row, index){
      
            var aux = row;
            index_produto =  row.contador;
            //um produto
            aux['recomendacao'] = [];

            console.log("produto_id", row.produto_id, index);
            var recomendacao; //recomendacao de um produto

            var q = "SELECT * from produto where produto_id in (select id_produto_recomendacao from recomendacao_produto where recomendacao_produto.id_produto_referencia = "+row.produto_id+")";

            var query_ = connection.query(q);
            

            //push em cada recomendacao
            query_.on('result', function(row, index){
              
                aux['recomendacao'].push(row);
                console.log("recomendacao- result ", aux.produto_id, index);
                              
            });

            //quando terminar a query de recomendacao de cada produto
            query_.on('end', function(){
                console.log("end_recomendacao ", count,  index_produto);
                produtos_.push(aux);

                count++;

                 if(count == (index_produto ) ){

                   console.log("enviar");
                   res(produtos_);


                 } else{


                    console.log("nao enviar");


                 }  

            });
                   

        });
            
 
        query_produtos.on('end', function(){

            console.log("end produtos query");
    
           });


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

        return new Promise( (res, rej)=>{

            var query_add_produto = connection.query('insert into produto set ?', produto, function(erro, result, fields){

                if(erro){
    
                    res(false);
    
                }
    
            });
    
            query_add_produto.on('end', function(){

                res(true);

            });

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

  