
/**
 * @api {get} produtos buscar todos os produtos
 * @apiVersion 1.0.0
 * @apiGroup Produto
 * @apiDescription
 * Retorna todos os produtos cadastrados na base de dados.
 * @apiSuccessExample {json} Success-Response:
 * [
    {
        "produto_id": 1,
        "produto_nome": "Notebook Ideapad 320 Intel Core i5-8250U 8GB (GeForce MX150 com 2GB) 1TB HD 15,6'' W10 Preto - Lenovo",
        "produto_preco": 259999,
        "produto_preco_antigo": 269999,
        "produto_imagem": "https://images-submarino.b2w.io/produtos/01/00/item/133252/8/133252826SZ.jpg",
        "produto_url_detalhe": "https://www.submarino.com.br/produto/133252826/notebook-lenovo-ideapad-320-intel-core-i5-8250u-8gb-geforce-mx150-com-2gb-1tb-tela-15-6-windows-10-preto?pfm_carac=notebook&pfm_index=7&pfm_page=search&pfm_pos=grid&pfm_type=search_page%20&voltagem=BIVOLT",
        "produto_condicao_pagamento": "<b> R$ 2.469,99 </b> em 1x no cartão de credito (5% de desconto)\r\nOu <b> R$ 2.599,99 </b> em até 20x de R$ 129,99 s/ juros",
        "contador": 11,
        "recomendacao": [
            {
                "produto_id": 2,
                "produto_nome": "Foto 6 - Notebook Acer A515-51G-72DB Intel Core I7 8GB (GeForce 940MX com 2GB) 1TB Tela LED 15.6\" Windows 10 - Cinza Escuro\r\nFoto 1 - Notebook Acer A515-51G-72DB Intel Core I7 8GB (GeForce 940MX com 2GB) 1TB Tela LED 15.6\" Windows 10 - Cinza Escuro\r\nFoto ",
                "produto_preco": 274999,
                "produto_preco_antigo": 284999,
                "produto_imagem": "https://images-submarino.b2w.io/produtos/01/00/item/132620/8/132620885SZ.jpg",
                "produto_url_detalhe": "https://www.submarino.com.br/produto/132620885/notebook-acer-a515-51g-72db-intel-core-i7-8gb-geforce-940mx-com-2gb-1tb-tela-led-15-6-windows-10-cinza-escuro?DCSext.recom=RR_item_page.rr1-ClickEV&nm_origem=rec_item_page.rr1-ClickEV&nm_ranking_rec=1",
                "produto_condicao_pagamento": "R$ 2.612,49 em 1x no cartão de credito(5% de desconto)\r\nOu R$ 2.749,99 em até 20x de R$ 137,49 s/ juros"
            },
            {
                "produto_id": 3,
                "produto_nome": "Notebook Lenovo Ideapad 320 Intel® Core i7-7500u 8GB (GeForce 940MX com 2GB) 1TB Tela FULL HD 15,6\" Windows 10 - Prata",
                "produto_preco": 299999,
                "produto_preco_antigo": 310000,
                "produto_imagem": "https://images-submarino.b2w.io/produtos/01/00/item/132384/8/132384827SZ.jpg",
                "produto_url_detalhe": "https://www.submarino.com.br/produto/132384827/notebook-lenovo-ideapad-320-intel-core-i7-7500u-8gb-geforce-940mx-com-2gb-1tb-tela-full-hd-15-6-windows-10-prata?DCSext.recom=RR_item_page.rr1-ClickEV&nm_origem=rec_item_page.rr1-ClickEV&nm_ranking_rec=2",
                "produto_condicao_pagamento": "R$ 2.849,99 em 1x no cartão Credito(5% de desconto)\r\nOu R$ 2.999,99 em até 20x de R$ 149,99 s/ juros"
            }
        ]
    },
    {
        "produto_id": 2,
        "produto_nome": "Foto 6 - Notebook Acer A515-51G-72DB Intel Core I7 8GB (GeForce 940MX com 2GB) 1TB Tela LED 15.6\" Windows 10 - Cinza Escuro\r\nFoto 1 - Notebook Acer A515-51G-72DB Intel Core I7 8GB (GeForce 940MX com 2GB) 1TB Tela LED 15.6\" Windows 10 - Cinza Escuro\r\nFoto ",
        "produto_preco": 274999,
        "produto_preco_antigo": 284999,
        "produto_imagem": "https://images-submarino.b2w.io/produtos/01/00/item/132620/8/132620885SZ.jpg",
        "produto_url_detalhe": "https://www.submarino.com.br/produto/132620885/notebook-acer-a515-51g-72db-intel-core-i7-8gb-geforce-940mx-com-2gb-1tb-tela-led-15-6-windows-10-cinza-escuro?DCSext.recom=RR_item_page.rr1-ClickEV&nm_origem=rec_item_page.rr1-ClickEV&nm_ranking_rec=1",
        "produto_condicao_pagamento": "R$ 2.612,49 em 1x no cartão de credito(5% de desconto)\r\nOu R$ 2.749,99 em até 20x de R$ 137,49 s/ juros",
        "contador": 11,
        "recomendacao": []
    },
    {
        "produto_id": 3,
        "produto_nome": "Notebook Lenovo Ideapad 320 Intel® Core i7-7500u 8GB (GeForce 940MX com 2GB) 1TB Tela FULL HD 15,6\" Windows 10 - Prata",
        "produto_preco": 299999,
        "produto_preco_antigo": 310000,
        "produto_imagem": "https://images-submarino.b2w.io/produtos/01/00/item/132384/8/132384827SZ.jpg",
        "produto_url_detalhe": "https://www.submarino.com.br/produto/132384827/notebook-lenovo-ideapad-320-intel-core-i7-7500u-8gb-geforce-940mx-com-2gb-1tb-tela-full-hd-15-6-windows-10-prata?DCSext.recom=RR_item_page.rr1-ClickEV&nm_origem=rec_item_page.rr1-ClickEV&nm_ranking_rec=2",
        "produto_condicao_pagamento": "R$ 2.849,99 em 1x no cartão Credito(5% de desconto)\r\nOu R$ 2.999,99 em até 20x de R$ 149,99 s/ juros",
        "contador": 11,
        "recomendacao": []
    },
    {
        "produto_id": 4,
        "produto_nome": "Foto 8 - Notebook Dell Inspiron i15-5567-A30B Intel Core i5 8GB (AMD Radeon R7 M445 de 2GB) 1TB Tela LED 15,6\" Windows 10 - Branco\r\nFoto 1 - Notebook Dell Inspiron i15-5567-A30B Intel Core i5 8GB (AMD Radeon R7 M445 de 2GB) 1TB Tela LED 15,6\" Windows 10 -",
        "produto_preco": 269999,
        "produto_preco_antigo": 289999,
        "produto_imagem": "https://images-submarino.b2w.io/produtos/01/00/item/131530/9/131530941SZ.jpg",
        "produto_url_detalhe": "https://www.submarino.com.br/produto/131530941/notebook-dell-inspiron-i15-5567-a30b-intel-core-i5-8gb-amd-radeon-r7-m445-de-2gb-1tb-tela-led-15-6-windows-10-branco?DCSext.recom=RR_item_page.rr1-ClickEV&nm_origem=rec_item_page.rr1-ClickEV&nm_ranking_rec=3",
        "produto_condicao_pagamento": "R$ 2.564,99 em 1x no cartão Credito(5% de desconto)\r\nOu R$ 2.699,99 em até 20x de R$ 134,99 s/ juros",
        "contador": 11,
        "recomendacao": []
    },
    {
        "produto_id": 5,
        "produto_nome": "Notebook A515-51G-C97B Intel Core 8 I5 8GB (GeForce MX130 com 2GB) 1TB LED LCD 15.6\" W10 - Acer",
        "produto_preco": 349990,
        "produto_preco_antigo": 360000,
        "produto_imagem": "https://images-submarino.b2w.io/produtos/01/00/item/133518/3/133518305SZ.jpg",
        "produto_url_detalhe": "https://www.submarino.com.br/produto/133518305/notebook-acer-a515-51g-c97b-intel-core-8a-i5-8gb-geforce-mx130-com-2gb-1tb-tela-led-lcd-15-6-windows-10-preto?DCSext.recom=RR_item_page.rr1-ClickEV&nm_origem=rec_item_page.rr1-ClickEV&nm_ranking_rec=4&voltagem=BIVOLT",
        "produto_condicao_pagamento": "R$ 3.499,90 no cartão Credito em até 20x de R$ 174,99 s/ juros",
        "contador": 11,
        "recomendacao": []
    },
    {
        "produto_id": 6,
        "produto_nome": "Foto 16 - Notebook Gamer Acer VX5-591G-54PG Intel Core i5 8GB (GeForce GTX 1050 com 4GB) 1TB Tela LED 15,6\" Windows 10 - Preto\r\nFoto 1 - Notebook Gamer Acer VX5-591G-54PG Intel Core i5 8GB (GeForce GTX 1050 com 4GB) 1TB Tela LED 15,6\" Windows 10 - Preto\r\n",
        "produto_preco": 367399,
        "produto_preco_antigo": 387399,
        "produto_imagem": "https://images-submarino.b2w.io/produtos/01/00/item/132134/3/132134369SZ.jpg",
        "produto_url_detalhe": "https://www.submarino.com.br/produto/132134369/notebook-gamer-acer-vx5-591g-54pg-intel-core-i5-8gb-geforce-gtx-1050-com-4gb-1tb-tela-led-15-6-windows-10-preto?DCSext.recom=RR_item_page.rr1-ClickEV&nm_origem=rec_item_page.rr1-ClickEV&nm_ranking_rec=5",
        "produto_condicao_pagamento": "R$ 3.490,29 em 1x no cartão Credito(5% de desconto)\r\nOu R$ 3.673,99 em até 20x de R$ 183,69 s/ juros",
        "contador": 11,
        "recomendacao": []
    },
    {
        "produto_id": 7,
        "produto_nome": "Tênis Olympikus Future Masculino - Cinza e Preto",
        "produto_preco": 10599,
        "produto_preco_antigo": 19999,
        "produto_imagem": "https://static.netshoes.com.br/produtos/tenis-olympikus-future-masculino/28/D22-0702-128/D22-0702-128_zoom1.jpg?resize=400:*",
        "produto_url_detalhe": "https://www.netshoes.com.br/tenis-olympikus-future-masculino-cinza+preto-D22-0702-128",
        "produto_condicao_pagamento": "R$ 100,31 com Beltraonos Card.\r\n\r\nou em 2x de R$ 50,16",
        "contador": 11,
        "recomendacao": []
    },
    {
        "produto_id": 8,
        "produto_nome": "Tênis Olympikus Future Masculino - Cinza e Preto",
        "produto_preco": 11999,
        "produto_preco_antigo": 19999,
        "produto_imagem": "https://static.netshoes.com.br/produtos/tenis-olympikus-future-masculino/28/D22-0702-128/D22-0702-128_zoom1.jpg?resize=400:*",
        "produto_url_detalhe": "https://www.netshoes.com.br/tenis-olympikus-future-masculino-cinza+preto-D22-0702-128",
        "produto_condicao_pagamento": "\t\r\nR$ 113,99 com Beltranos Card.\r\n\r\nou em 2x de R$ 57,00",
        "contador": 11,
        "recomendacao": []
    },
    {
        "produto_id": 9,
        "produto_nome": "Tênis Olympikus Future Masculino - Verde Limão e Preto",
        "produto_preco": 12999,
        "produto_preco_antigo": 19999,
        "produto_imagem": "https://static.netshoes.com.br/produtos/tenis-olympikus-future-masculino/50/D22-0702-450/D22-0702-450_zoom1.jpg?resize=400:*",
        "produto_url_detalhe": "https://www.netshoes.com.br/tenis-olympikus-future-masculino-verde+limao+preto-D22-0702-450",
        "produto_condicao_pagamento": "R$ 123,49 com beltranos Card.\r\n\r\nou em 3x de R$ 41,16",
        "contador": 11,
        "recomendacao": []
    },
    {
        "produto_id": 10,
        "produto_nome": "Tênis Olympikus Future Masculino - Laranja e Preto",
        "produto_preco": 10999,
        "produto_preco_antigo": 19999,
        "produto_imagem": "https://static.netshoes.com.br/produtos/tenis-olympikus-future-masculino/06/D22-0702-206/D22-0702-206_zoom1.jpg?resize=400:*",
        "produto_url_detalhe": "https://www.netshoes.com.br/tenis-olympikus-future-masculino-laranja+preto-D22-0702-206",
        "produto_condicao_pagamento": "\t\r\nR$ 87,99 com Beltranos Card.\r\n\r\nou em 2x de R$ 44,00",
        "contador": 11,
        "recomendacao": []
    },
    {
        "produto_id": 11,
        "produto_nome": "Tênis Kappa Impact - Preto e Grafite",
        "produto_preco": 8999,
        "produto_preco_antigo": 15000,
        "produto_imagem": "https://static.netshoes.com.br/produtos/tenis-kappa-impact/04/D24-0649-304/D24-0649-304_zoom1.jpg?resize=400:*",
        "produto_url_detalhe": "https://www.netshoes.com.br/tenis-kappa-impact-preto+grafite-D24-0649-304",
        "produto_condicao_pagamento": "R$ 71,99 com Beltranos Card.\r\n\r\nou em 1x de R$ 71,99",
        "contador": 11,
        "recomendacao": []
    }
]
 */











 
/**
 * @api {get} produtos/:id buscar produto
 * @apiVersion 1.0.0
 * @apiGroup Produto
 * @apiDescription
 * Retorna um produto em especifico, conforme solicitado
 * @apiSuccessExample {json} Success-Response:
 * {
    "produto_id": 1,
    "produto_nome": "Notebook Ideapad 320 Intel Core i5-8250U 8GB (GeForce MX150 com 2GB) 1TB HD 15,6'' W10 Preto - Lenovo",
    "produto_preco": 259999,
    "produto_preco_antigo": 269999,
    "produto_imagem": "https://images-submarino.b2w.io/produtos/01/00/item/133252/8/133252826SZ.jpg",
    "produto_url_detalhe": "https://www.submarino.com.br/produto/133252826/notebook-lenovo-ideapad-320-intel-core-i5-8250u-8gb-geforce-mx150-com-2gb-1tb-tela-15-6-windows-10-preto?pfm_carac=notebook&pfm_index=7&pfm_page=search&pfm_pos=grid&pfm_type=search_page%20&voltagem=BIVOLT",
    "produto_condicao_pagamento": "<b> R$ 2.469,99 </b> em 1x no cartão de credito (5% de desconto)\r\nOu <b> R$ 2.599,99 </b> em até 20x de R$ 129,99 s/ juros",
    "recomendacao": [
        {
            "produto_id": 2,
            "produto_nome": "Foto 6 - Notebook Acer A515-51G-72DB Intel Core I7 8GB (GeForce 940MX com 2GB) 1TB Tela LED 15.6\" Windows 10 - Cinza Escuro\r\nFoto 1 - Notebook Acer A515-51G-72DB Intel Core I7 8GB (GeForce 940MX com 2GB) 1TB Tela LED 15.6\" Windows 10 - Cinza Escuro\r\nFoto ",
            "produto_preco": 274999,
            "produto_preco_antigo": 284999,
            "produto_imagem": "https://images-submarino.b2w.io/produtos/01/00/item/132620/8/132620885SZ.jpg",
            "produto_url_detalhe": "https://www.submarino.com.br/produto/132620885/notebook-acer-a515-51g-72db-intel-core-i7-8gb-geforce-940mx-com-2gb-1tb-tela-led-15-6-windows-10-cinza-escuro?DCSext.recom=RR_item_page.rr1-ClickEV&nm_origem=rec_item_page.rr1-ClickEV&nm_ranking_rec=1",
            "produto_condicao_pagamento": "R$ 2.612,49 em 1x no cartão de credito(5% de desconto)\r\nOu R$ 2.749,99 em até 20x de R$ 137,49 s/ juros"
        },
        {
            "produto_id": 3,
            "produto_nome": "Notebook Lenovo Ideapad 320 Intel® Core i7-7500u 8GB (GeForce 940MX com 2GB) 1TB Tela FULL HD 15,6\" Windows 10 - Prata",
            "produto_preco": 299999,
            "produto_preco_antigo": 310000,
            "produto_imagem": "https://images-submarino.b2w.io/produtos/01/00/item/132384/8/132384827SZ.jpg",
            "produto_url_detalhe": "https://www.submarino.com.br/produto/132384827/notebook-lenovo-ideapad-320-intel-core-i7-7500u-8gb-geforce-940mx-com-2gb-1tb-tela-full-hd-15-6-windows-10-prata?DCSext.recom=RR_item_page.rr1-ClickEV&nm_origem=rec_item_page.rr1-ClickEV&nm_ranking_rec=2",
            "produto_condicao_pagamento": "R$ 2.849,99 em 1x no cartão Credito(5% de desconto)\r\nOu R$ 2.999,99 em até 20x de R$ 149,99 s/ juros"
        }
    ]
}
 */