-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: 21-Jan-2020 às 10:17
-- Versão do servidor: 5.7.23
-- versão do PHP: 7.1.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `pizzaria`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `categorias`
--

CREATE TABLE `categorias` (
  `id` int(11) NOT NULL,
  `name` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `categorias`
--

INSERT INTO `categorias` (`id`, `name`) VALUES
(1, 'Tradicional'),
(3, 'Vegana'),
(4, 'doces'),
(5, 'especiais');

-- --------------------------------------------------------

--
-- Estrutura da tabela `sabores`
--

CREATE TABLE `sabores` (
  `id` int(11) NOT NULL,
  `name` varchar(150) DEFAULT NULL,
  `ingredientes` varchar(150) DEFAULT NULL,
  `categoriaId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `sabores`
--

INSERT INTO `sabores` (`id`, `name`, `ingredientes`, `categoriaId`) VALUES
(1, 'Atum', 'Atum / Cebola / Catupiry', 1),
(3, 'Alho e óleo', 'Alho / Óleo', 1),
(4, 'Americana', 'Calabresa / Presunto / Milho Verde / Palmito / Ovo cozido / Cebola / Azeitonas', 1),
(5, 'Seis Queijos', 'Provolone / Catupiry / Parmesão / Gorgonzola / Cheddar', 3),
(6, 'Palmito com Catupiry', 'Palmito / Catupiry / Azeitonas', 3),
(7, 'Abacaxi com Coco', ' Creme de confeiteiro / Abacaxi / Coco', 4),
(8, 'Califórnia', 'Creme de confeiteiro / Figo / Pêssegos / Abacaxi em Calda', 4),
(9, 'Coração', 'Coração', 5),
(10, 'Filé com Cheddar', 'Filé / Cheddar', 5);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `categorias`
--
ALTER TABLE `categorias`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sabores`
--
ALTER TABLE `sabores`
  ADD PRIMARY KEY (`id`),
  ADD KEY `categoriaId` (`categoriaId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `categorias`
--
ALTER TABLE `categorias`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `sabores`
--
ALTER TABLE `sabores`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- Constraints for dumped tables
--

--
-- Limitadores para a tabela `sabores`
--
ALTER TABLE `sabores`
  ADD CONSTRAINT `sabores_ibfk_1` FOREIGN KEY (`categoriaId`) REFERENCES `categorias` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
