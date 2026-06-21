-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
SHOW WARNINGS;
-- -----------------------------------------------------
-- Schema contactos_db
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `contactos_db` ;

-- -----------------------------------------------------
-- Schema contactos_db
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `contactos_db` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
SHOW WARNINGS;
USE `contactos_db` ;

-- -----------------------------------------------------
-- Table `contactos_db`.`contactos`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `contactos_db`.`contactos` ;

SHOW WARNINGS;
CREATE TABLE IF NOT EXISTS `contactos_db`.`contactos` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(100) NULL DEFAULT NULL,
  `correo` VARCHAR(100) NULL DEFAULT NULL,
  `asunto` TEXT NULL DEFAULT NULL,
  `mensaje` TEXT NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 16
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;

SHOW WARNINGS;

-- -----------------------------------------------------
-- Table `contactos_db`.`productos`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `contactos_db`.`productos` ;

SHOW WARNINGS;
CREATE TABLE IF NOT EXISTS `contactos_db`.`productos` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(100) NOT NULL,
  `descripcion` TEXT NULL DEFAULT NULL,
  `precio` DECIMAL(10,2) NOT NULL,
  `categoria` VARCHAR(100) NULL DEFAULT NULL,
  `stock` INT NULL DEFAULT '0',
  `imagen` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 15
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;

SHOW WARNINGS;

-- -----------------------------------------------------
-- Table `contactos_db`.`usuarios`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `contactos_db`.`usuarios` ;

SHOW WARNINGS;
CREATE TABLE IF NOT EXISTS `contactos_db`.`usuarios` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(100) NOT NULL,
  `correo` VARCHAR(100) NOT NULL,
  `password` VARCHAR(100) NOT NULL,
  `rol` VARCHAR(50) NULL DEFAULT 'admin',
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 3
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;

SHOW WARNINGS;
CREATE UNIQUE INDEX `correo` ON `contactos_db`.`usuarios` (`correo` ASC) VISIBLE;

SHOW WARNINGS;

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
