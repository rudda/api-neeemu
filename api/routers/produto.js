var produto_model = require('./../model/produto');


var appProduto = function (app) {
    app.get("/produto", function(req, res) {

   
      produto_model.getProdutosById(0);

      res.status(200).send("Welcome to produto");
    
    
    });
  }
  
  module.exports = appProduto;