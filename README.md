# api-neeemu

Atividade prática de programação que consiste em criar uma api NodeJS. 

# banco de dados

Para resolução desse problema, decidi usar banco de dados mySql do que uma simples resposta estatica (como opção no desafio).
 Abaixo a ilustração do relacionamento (ER) do banco de dados

![modelo banco de dados](https://github.com/rudda/api-neeemu/blob/master/doc/src/modelagem_banco.PNG)

# API nodeJS

## start REST
    
    node api/index.js

* A api possue as seguintes funcionalidades
  * listar todos os produtos 
  * listar um produto por id

 *  [documentação](http://localhost/api-neemu/api/api-doc/)


# O projeto Web

    A segunda camado do projeto, consiste em um projeto web construido com angular5, e possue as seguintes funcionalidades:

* visualizar produtos
* visualizar detalhes de um produto
* visualizar as recomendações do produto

* testar a api (passando um paramentro de um produto e visualizando suas recomendações)
* sobre o autor 
* sobre o projeto

