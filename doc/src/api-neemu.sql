-- phpMyAdmin SQL Dump
-- version 4.8.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: 18-Jul-2018 às 04:12
-- Versão do servidor: 10.1.33-MariaDB
-- PHP Version: 7.2.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `api-neemu`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `produto`
--

CREATE TABLE `produto` (
  `produto_id` int(11) NOT NULL,
  `produto_nome` varchar(255) NOT NULL,
  `produto_preco` int(11) DEFAULT NULL,
  `produto_preco_antigo` int(11) DEFAULT NULL,
  `produto_imagem` text,
  `produto_url_detalhe` text,
  `produto_condicao_pagamento` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `produto`
--

INSERT INTO `produto` (`produto_id`, `produto_nome`, `produto_preco`, `produto_preco_antigo`, `produto_imagem`, `produto_url_detalhe`, `produto_condicao_pagamento`) VALUES
(1, 'Notebook Ideapad 320 Intel Core i5-8250U 8GB (GeForce MX150 com 2GB) 1TB HD 15,6\'\' W10 Preto - Lenovo', 259999, 269999, 'https://images-submarino.b2w.io/produtos/01/00/item/133252/8/133252826SZ.jpg', 'https://www.submarino.com.br/produto/133252826/notebook-lenovo-ideapad-320-intel-core-i5-8250u-8gb-geforce-mx150-com-2gb-1tb-tela-15-6-windows-10-preto?pfm_carac=notebook&pfm_index=7&pfm_page=search&pfm_pos=grid&pfm_type=search_page%20&voltagem=BIVOLT', 'em 1x no cartão de credito (5% de desconto)\r\nOu em até 20x +juros'),
(2, 'Foto 6 - Notebook Acer A515-51G-72DB Intel Core I7 8GB (GeForce 940MX com 2GB) 1TB Tela LED 15.6\" Windows 10 - Cinza Escuro\r\nFoto 1 - Notebook Acer A515-51G-72DB Intel Core I7 8GB (GeForce 940MX com 2GB) 1TB Tela LED 15.6\" Windows 10 - Cinza Escuro\r\nFoto ', 274999, 284999, 'https://images-submarino.b2w.io/produtos/01/00/item/132620/8/132620885SZ.jpg', 'https://www.submarino.com.br/produto/132620885/notebook-acer-a515-51g-72db-intel-core-i7-8gb-geforce-940mx-com-2gb-1tb-tela-led-15-6-windows-10-cinza-escuro?DCSext.recom=RR_item_page.rr1-ClickEV&nm_origem=rec_item_page.rr1-ClickEV&nm_ranking_rec=1', 'em 1x no cartão de credito (5% de desconto)\r\nOu em até 20x +juros'),
(3, 'Notebook Lenovo Ideapad 320 Intel® Core i7-7500u 8GB (GeForce 940MX com 2GB) 1TB Tela FULL HD 15,6\" Windows 10 - Prata', 299999, 310000, 'https://images-submarino.b2w.io/produtos/01/00/item/132384/8/132384827SZ.jpg', 'https://www.submarino.com.br/produto/132384827/notebook-lenovo-ideapad-320-intel-core-i7-7500u-8gb-geforce-940mx-com-2gb-1tb-tela-full-hd-15-6-windows-10-prata?DCSext.recom=RR_item_page.rr1-ClickEV&nm_origem=rec_item_page.rr1-ClickEV&nm_ranking_rec=2', 'em 1x no cartão de credito (5% de desconto)\r\nOu em até 20x +juros'),
(4, 'Foto 8 - Notebook Dell Inspiron i15-5567-A30B Intel Core i5 8GB (AMD Radeon R7 M445 de 2GB) 1TB Tela LED 15,6\" Windows 10 - Branco\r\nFoto 1 - Notebook Dell Inspiron i15-5567-A30B Intel Core i5 8GB (AMD Radeon R7 M445 de 2GB) 1TB Tela LED 15,6\" Windows 10 -', 269999, 289999, 'https://images-submarino.b2w.io/produtos/01/00/item/131530/9/131530941SZ.jpg', 'https://www.submarino.com.br/produto/131530941/notebook-dell-inspiron-i15-5567-a30b-intel-core-i5-8gb-amd-radeon-r7-m445-de-2gb-1tb-tela-led-15-6-windows-10-branco?DCSext.recom=RR_item_page.rr1-ClickEV&nm_origem=rec_item_page.rr1-ClickEV&nm_ranking_rec=3', 'em 1x no cartão de credito (5% de desconto)\r\nOu em até 20x +juros'),
(5, 'Notebook A515-51G-C97B Intel Core 8 I5 8GB (GeForce MX130 com 2GB) 1TB LED LCD 15.6\" W10 - Acer', 349990, 360000, 'https://images-submarino.b2w.io/produtos/01/00/item/133518/3/133518305SZ.jpg', 'https://www.submarino.com.br/produto/133518305/notebook-acer-a515-51g-c97b-intel-core-8a-i5-8gb-geforce-mx130-com-2gb-1tb-tela-led-lcd-15-6-windows-10-preto?DCSext.recom=RR_item_page.rr1-ClickEV&nm_origem=rec_item_page.rr1-ClickEV&nm_ranking_rec=4&voltagem=BIVOLT', 'em 1x no cartão de credito (5% de desconto)\r\nOu em até 20x +juros'),
(6, 'Foto 16 - Notebook Gamer Acer VX5-591G-54PG Intel Core i5 8GB (GeForce GTX 1050 com 4GB) 1TB Tela LED 15,6\" Windows 10 - Preto\r\nFoto 1 - Notebook Gamer Acer VX5-591G-54PG Intel Core i5 8GB (GeForce GTX 1050 com 4GB) 1TB Tela LED 15,6\" Windows 10 - Preto\r\n', 367399, 387399, 'https://images-submarino.b2w.io/produtos/01/00/item/132134/3/132134369SZ.jpg', 'https://www.submarino.com.br/produto/132134369/notebook-gamer-acer-vx5-591g-54pg-intel-core-i5-8gb-geforce-gtx-1050-com-4gb-1tb-tela-led-15-6-windows-10-preto?DCSext.recom=RR_item_page.rr1-ClickEV&nm_origem=rec_item_page.rr1-ClickEV&nm_ranking_rec=5', 'em 1x no cartão de credito (5% de desconto)\r\nOu em até 20x +juros'),
(7, 'Tênis Olympikus Future Masculino - Cinza e Preto', 10599, 19999, 'https://static.netshoes.com.br/produtos/tenis-olympikus-future-masculino/28/D22-0702-128/D22-0702-128_zoom1.jpg?resize=400:*', 'https://www.netshoes.com.br/tenis-olympikus-future-masculino-cinza+preto-D22-0702-128', 'em 1x no cartão de credito (5% de desconto)\r\nOu em até 20x +juros'),
(8, 'Tênis Olympikus Future Masculino - Cinza e Preto', 11999, 19999, 'https://static.netshoes.com.br/produtos/tenis-olympikus-future-masculino/28/D22-0702-128/D22-0702-128_zoom1.jpg?resize=400:*', 'https://www.netshoes.com.br/tenis-olympikus-future-masculino-cinza+preto-D22-0702-128', 'em 1x no cartão de credito (5% de desconto)\r\nOu em até 20x +juros'),
(9, 'Tênis Olympikus Future Masculino - Verde Limão e Preto', 12999, 19999, 'https://static.netshoes.com.br/produtos/tenis-olympikus-future-masculino/50/D22-0702-450/D22-0702-450_zoom1.jpg?resize=400:*', 'https://www.netshoes.com.br/tenis-olympikus-future-masculino-verde+limao+preto-D22-0702-450', 'em 1x no cartão de credito (5% de desconto)\r\nOu em até 20x +juros'),
(10, 'Tênis Olympikus Future Masculino - Laranja e Preto', 10999, 19999, 'https://static.netshoes.com.br/produtos/tenis-olympikus-future-masculino/06/D22-0702-206/D22-0702-206_zoom1.jpg?resize=400:*', 'https://www.netshoes.com.br/tenis-olympikus-future-masculino-laranja+preto-D22-0702-206', 'em 1x no cartão de credito (5% de desconto)\r\nOu em até 20x +juros'),
(11, 'Tênis Kappa Impact - Preto e Grafite', 8999, 15000, 'https://static.netshoes.com.br/produtos/tenis-kappa-impact/04/D24-0649-304/D24-0649-304_zoom1.jpg?resize=400:*', 'https://www.netshoes.com.br/tenis-kappa-impact-preto+grafite-D24-0649-304', 'em 1x no cartão de credito (5% de desconto)\r\nOu em até 20x +juros'),
(12, 'Camisa Seleção Brasil I 2018 s/n° - Torcedor Nike Masculina - Amarelo e Verde', 25000, 25000, 'https://static.netshoes.com.br/produtos/camisa-selecao-brasil-i-2018-sn-torcedor-nike-masculina/46/D12-9560-046/D12-9560-046_zoom1.jpg?resize=400:*', 'https://www.netshoes.com.br/camisa-selecao-brasil-i-2018-sn-torcedor-nike-masculina-amarelo+verde-D12-9560-046', 'em 1x no cartão de credito (5% de desconto)\r\nOu em até 20x +juros'),
(13, 'Camisa Seleção Brasil I 2018 s/n° - Torcedor Nike Feminina - Amarelo e Verde', 19999, 19999, 'https://static.netshoes.com.br/produtos/camisa-selecao-brasil-i-2018-sn-torcedor-nike-feminina/46/D12-9558-046/D12-9558-046_zoom1.jpg', 'https://www.netshoes.com.br/camisa-selecao-brasil-i-2018-sn-torcedor-nike-feminina-amarelo+verde-D12-9558-046', 'em 1x no cartão de credito (5% de desconto)\r\nOu em até 20x +juros'),
(14, 'Camisa Puma Itália Home 2018 - Azul', 19900, 24800, 'https://static.netshoes.com.br/produtos/camisa-puma-italia-home-2018/08/D14-4700-008/D14-4700-008_zoom1.jpg', 'https://www.netshoes.com.br/camisa-puma-italia-home-2018-azul-D14-4700-008', 'em 1x no cartão de credito (5% de desconto)\r\nOu em até 20x +juros'),
(15, 'Camisa Seleção Inglaterra Away 2018 s/n° Torcedor Nike Masculino - Vermelho e Branco', 15000, 25000, 'https://static.netshoes.com.br/produtos/camisa-selecao-inglaterra-away-2018-sn-torcedor-nike-masculino/56/D12-9800-056/D12-9800-056_zoom1.jpg', 'https://www.netshoes.com.br/camisa-selecao-inglaterra-away-2018-sn-torcedor-nike-masculino-vermelho+branco-D12-9800-056', 'em 1x no cartão de credito (5% de desconto)\r\nOu em até 20x +juros');

-- --------------------------------------------------------

--
-- Estrutura da tabela `produto_info`
--

CREATE TABLE `produto_info` (
  `produto_info_id` int(11) NOT NULL,
  `produto_condicao_pagamento` text NOT NULL,
  `produto_produto_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura da tabela `recomendacao_produto`
--

CREATE TABLE `recomendacao_produto` (
  `id_produto_referencia` int(11) NOT NULL,
  `id_produto_recomendacao` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `recomendacao_produto`
--

INSERT INTO `recomendacao_produto` (`id_produto_referencia`, `id_produto_recomendacao`) VALUES
(1, 2),
(1, 3),
(1, 4),
(1, 5),
(1, 6),
(1, 7),
(1, 8),
(1, 9),
(1, 10),
(2, 3),
(2, 4),
(2, 5),
(2, 6),
(2, 7),
(2, 11),
(3, 1),
(3, 4),
(3, 5),
(3, 6),
(3, 9),
(3, 11),
(3, 12),
(3, 14),
(9, 7),
(9, 8),
(9, 9),
(9, 10),
(9, 11),
(12, 5),
(12, 13),
(12, 14),
(12, 15);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `produto`
--
ALTER TABLE `produto`
  ADD PRIMARY KEY (`produto_id`);

--
-- Indexes for table `produto_info`
--
ALTER TABLE `produto_info`
  ADD PRIMARY KEY (`produto_info_id`),
  ADD KEY `fk_produto_info_produto1_idx` (`produto_produto_id`);

--
-- Indexes for table `recomendacao_produto`
--
ALTER TABLE `recomendacao_produto`
  ADD PRIMARY KEY (`id_produto_referencia`,`id_produto_recomendacao`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `produto`
--
ALTER TABLE `produto`
  MODIFY `produto_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `produto_info`
--
ALTER TABLE `produto_info`
  MODIFY `produto_info_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Limitadores para a tabela `produto_info`
--
ALTER TABLE `produto_info`
  ADD CONSTRAINT `fk_produto_info_produto1` FOREIGN KEY (`produto_produto_id`) REFERENCES `produto` (`produto_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
