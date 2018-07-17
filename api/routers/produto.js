var produto_model = require('./../model/produto');


var appProduto = function (app) {
    
  app.get('/produtos', function(req, res){

    produto_model.getProdutos().then(resposta=>{
          
      res.status(200).send(resposta);

    });


  });


  app.get("/produtos/:id", function(req, res) {

      if(req.params.id != null && req.params.id != undefined ){

        produto_model.getProdutosById(req.params.id)
          .then(resposta=>{

          // console.log(resposta);

            res.status(200).send(resposta);
          

          });
    

      }
       
    });
  }
  
  module.exports = appProduto;