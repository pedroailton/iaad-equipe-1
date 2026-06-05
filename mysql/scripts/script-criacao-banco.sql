-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema Copa do Mundo de Futebol
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema Copa do Mundo de Futebol
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `Copa do Mundo de Futebol` DEFAULT CHARACTER SET utf8 ;
USE `Copa do Mundo de Futebol` ;

-- -----------------------------------------------------
-- Table `Copa do Mundo de Futebol`.`selecoes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Copa do Mundo de Futebol`.`selecoes` (
  `id_selecao` INT NOT NULL,
  `nome_selecao` VARCHAR(50) NOT NULL,
  `continente` VARCHAR(50) NOT NULL,
  `tecnico` VARCHAR(50) NOT NULL,
  `titulos` INT NOT NULL,
  PRIMARY KEY (`id_selecao`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Copa do Mundo de Futebol`.`jogadores`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Copa do Mundo de Futebol`.`jogadores` (
  `id_jogador` INT NOT NULL,
  `nome_jogador` VARCHAR(60) NOT NULL,
  `posicao` VARCHAR(30) NOT NULL,
  `numero_camisa` INT NOT NULL,
  `data_nascimento` DATE NOT NULL,
  `id_selecao` INT NOT NULL,
  PRIMARY KEY (`id_jogador`),
  INDEX `fk_jogadores_selecoes_idx` (`id_selecao` ASC) INVISIBLE,
  CONSTRAINT `id_selecao`
    FOREIGN KEY (`id_selecao`)
    REFERENCES `Copa do Mundo de Futebol`.`selecoes` (`id_selecao`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Copa do Mundo de Futebol`.`estadios`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Copa do Mundo de Futebol`.`estadios` (
  `id_estadio` INT NOT NULL,
  `nome_estadio` VARCHAR(80) NOT NULL,
  `cidade` VARCHAR(50) NOT NULL,
  `pais` VARCHAR(50) NOT NULL,
  `capacidade` INT NOT NULL,
  PRIMARY KEY (`id_estadio`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Copa do Mundo de Futebol`.`partidas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Copa do Mundo de Futebol`.`partidas` (
  `id_partida` INT NOT NULL,
  `data_partida` DATE NOT NULL,
  `id_estadio` INT NOT NULL,
  `id_selecao_1` INT NOT NULL,
  `id_selecao_2` INT NOT NULL,
  `quantidade_gols_selecao_1` INT NOT NULL,
  `quantidade_gols_selecao_2` INT NOT NULL,
  `vencedor` INT NULL,
  PRIMARY KEY (`id_partida`),
  INDEX `id_estadio_idx` (`id_estadio` ASC) VISIBLE,
  INDEX `quantidade_gols_selecao_1_idx` (`id_selecao_1` ASC) VISIBLE,
  INDEX `id_selecao_2_idx` (`id_selecao_2` ASC) VISIBLE,
  INDEX `vencedor_idx` (`vencedor` ASC) VISIBLE,
  CONSTRAINT `id_estadio`
    FOREIGN KEY (`id_estadio`)
    REFERENCES `Copa do Mundo de Futebol`.`estadios` (`id_estadio`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `id_selecao_1`
    FOREIGN KEY (`id_selecao_1`)
    REFERENCES `Copa do Mundo de Futebol`.`selecoes` (`id_selecao`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `id_selecao_2`
    FOREIGN KEY (`id_selecao_2`)
    REFERENCES `Copa do Mundo de Futebol`.`selecoes` (`id_selecao`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `vencedor`
    FOREIGN KEY (`vencedor`)
    REFERENCES `Copa do Mundo de Futebol`.`selecoes` (`id_selecao`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
