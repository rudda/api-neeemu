    var express = require('express');
    var routers = require('./routers/routers');
    var produto = require('./routers/produto');
    var bodyParser = require("body-parser");
   

    app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));


    routers(app);    
    produto(app);
      
    var server = app.listen(3000);
    console.log('Servidor Express iniciado na porta %s', server.address().port);