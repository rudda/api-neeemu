# api-neeemu

Atividade prática de programação que consiste em criar uma api NodeJS. 

![modelo banco de dados](https://github.com/rudda/api-neeemu/blob/master/doc/src/screen.PNG)


# banco de dados

Para resolução desse problema, decidi usar banco de dados mySql do que uma simples resposta estatica (como opção no desafio).
 Abaixo a ilustração do relacionamento (ER) do banco de dados

![modelo banco de dados](https://github.com/rudda/api-neeemu/blob/master/doc/src/api-neemu.PNG)

    para que o banco de dados funcione corretamente é nessario os seguintes passo:
* banco de dados mySQl
  ** usuario root
  ** sem senha
  ** nome banco de dados api-neemu

  ps: você pode configurar o arquivo nesse seguinte trecho

  ´´´js
    
    var connection = mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        password : '',
        database : 'api-neemu'
    });

  ´´´


# API nodeJS

## start REST
    
    node api/index.js

* A api possue as seguintes funcionalidades
  * listar todos os produtos 
  * listar um produto por id

 *  [documentação](http://localhost/api-neemu/api/api-doc/)


# O projeto Web

A segunda camado do projeto, consiste em um projeto web  que tem a funcionalidade de consumir a api REST NodeJS na rota (GET) /produtos:id que mostra todas as informações de um produto e suas recomendações.



