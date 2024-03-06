-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema yumyum-database
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema yumyum-database
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `yumyum-database` DEFAULT CHARACTER SET utf8mb3 ;
USE `yumyum-database` ;

-- -----------------------------------------------------
-- Table `yumyum-database`.`categories`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `yumyum-database`.`categories` (
  `idcategories` BIGINT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NOT NULL,
  `description` VARCHAR(255) NOT NULL,
  `url_img` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`idcategories`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `yumyum-database`.`products`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `yumyum-database`.`products` (
  `idproducts` BIGINT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NOT NULL,
  `description` VARCHAR(255) NOT NULL,
  `amount_stock` INT NOT NULL,
  `price` DOUBLE NOT NULL,
  `url_img` VARCHAR(255) NOT NULL,
  `categories_idcategories` BIGINT NOT NULL,
  PRIMARY KEY (`idproducts`),
  INDEX `fk_products_categories1_idx` (`categories_idcategories` ASC) VISIBLE,
  CONSTRAINT `fk_products_categories1`
    FOREIGN KEY (`categories_idcategories`)
    REFERENCES `yumyum-database`.`categories` (`idcategories`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `yumyum-database`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `yumyum-database`.`users` (
  `idusers` BIGINT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NOT NULL,
  `phone` VARCHAR(45) NOT NULL,
  `email` VARCHAR(100) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  `role` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idusers`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `yumyum-database`.`cart`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `yumyum-database`.`cart` (
  `idcart` BIGINT NOT NULL AUTO_INCREMENT,
  `products_idproducts` BIGINT NOT NULL,
  `users_idusers` BIGINT NOT NULL,
  `total_price` DOUBLE NOT NULL,
  `amount` INT NOT NULL,
  PRIMARY KEY (`idcart`, `products_idproducts`, `users_idusers`),
  INDEX `fk_users_idusers1_idx` (`users_idusers` ASC) VISIBLE,
  INDEX `fk_products_idproducts1_idx` (`products_idproducts` ASC) VISIBLE,
  CONSTRAINT `fk_products_idproducts`
    FOREIGN KEY (`products_idproducts`)
    REFERENCES `yumyum-database`.`products` (`idproducts`),
  CONSTRAINT `fk_users_idusers`
    FOREIGN KEY (`users_idusers`)
    REFERENCES `yumyum-database`.`users` (`idusers`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
