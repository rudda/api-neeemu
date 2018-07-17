var produto_model = require('./../model/produto');

/**
 *@apiName name
 *@apiSampleRequest url
 *@apiSuccessExample {json} [resposta-sucesso]
                   example 
 *
 */
var appProduto = function (app) {
    app.get("/produto/:id", function(req, res) {

   
    produto_model.getProdutosById(req.params.id)
    .then(resposta=>{

     // console.log(resposta);

      res.status(200).send(resposta);
    

    });
    
    
    
    
    });
  }
  
  module.exports = appProduto;