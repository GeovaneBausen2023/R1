-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 13-Dez-2023 às 14:45
-- Versão do servidor: 10.4.32-MariaDB
-- versão do PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `projetojess`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `relusuariotarefa`
--

CREATE TABLE `relusuariotarefa` (
  `idUsuario` int(11) NOT NULL,
  `idTarefa` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Extraindo dados da tabela `relusuariotarefa`
--

INSERT INTO `relusuariotarefa` (`idUsuario`, `idTarefa`) VALUES
(1, 8),
(2, 3);

-- --------------------------------------------------------

--
-- Estrutura da tabela `tarefas`
--

CREATE TABLE `tarefas` (
  `id` int(11) NOT NULL,
  `titulo` varchar(255) NOT NULL,
  `descricao` text NOT NULL,
  `data` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Extraindo dados da tabela `tarefas`
--

INSERT INTO `tarefas` (`id`, `titulo`, `descricao`, `data`) VALUES
(3, 'PHP OO e JAVASCRIPT e HTML E CSS E TUDO QUE NO CURSO 23523523', 'Realizar as videoaulas e codar', '2023-11-28 09:41:14'),
(7, 'TESTE TASK 2', 'asfsafsaf', '2023-11-14 10:12:06'),
(8, 'Javascript ', 'assafsfa', '2023-11-30 10:55:56');

-- --------------------------------------------------------

--
-- Estrutura da tabela `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `login` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `senha` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Extraindo dados da tabela `usuarios`
--

INSERT INTO `usuarios` (`id`, `login`, `email`, `senha`) VALUES
(1, 'admi', 'admin@admin', '30ed55b89373c25492993b3d004440ff'),
(2, 'laura2', 'laura@laura', '81dc9bdb52d04dc20036dbd8313ed055'),
(7, 'arquimdes@arquimedes.ifes', 'admin@admin', '2e99bf4e42962410038bc6fa4ce40d97');

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `relusuariotarefa`
--
ALTER TABLE `relusuariotarefa`
  ADD KEY `FK_tarefa` (`idTarefa`),
  ADD KEY `FK_usuario` (`idUsuario`);

--
-- Índices para tabela `tarefas`
--
ALTER TABLE `tarefas`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `tarefas`
--
ALTER TABLE `tarefas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de tabela `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- Restrições para despejos de tabelas
--

--
-- Limitadores para a tabela `relusuariotarefa`
--
ALTER TABLE `relusuariotarefa`
  ADD CONSTRAINT `FK_tarefa` FOREIGN KEY (`idTarefa`) REFERENCES `tarefas` (`id`),
  ADD CONSTRAINT `FK_usuario` FOREIGN KEY (`idUsuario`) REFERENCES `usuarios` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
