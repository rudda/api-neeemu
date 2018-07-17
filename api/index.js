    var express = require('express');
    var routers = require('./routers/routers');
    var produto = require('./routers/produto');
    var bodyParser = require("body-parser");
    var cors = require('cors');
   

    app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(cors());
    
    routers(app);    
    produto(app);
      
    var server = app.listen(3000);
    console.log('Servidor Express iniciado na porta %s', server.address().port);