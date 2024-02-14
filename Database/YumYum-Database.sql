-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema YumYum-Database
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema YumYum-Database
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `YumYum-Database` DEFAULT CHARACTER SET utf8 ;
USE `YumYum-Database` ;

-- -----------------------------------------------------
-- Table `YumYum-Database`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `YumYum-Database`.`users` (
  `idusers` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `phone` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  `role` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idusers`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `YumYum-Database`.`categories`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `YumYum-Database`.`categories` (
  `idcategories` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `description` VARCHAR(45) NOT NULL,
  `url_img` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`idcategories`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `YumYum-Database`.`products`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `YumYum-Database`.`products` (
  `idproducts` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `decription` VARCHAR(45) NOT NULL,
  `amount_stock` INT NOT NULL,
  `price` DOUBLE NOT NULL,
  `has_color` TINYINT(1) NOT NULL,
  `colors` VARCHAR(45) NOT NULL,
  `url_img` VARCHAR(100) NOT NULL,
  `categories_idcategories` INT NOT NULL,
  PRIMARY KEY (`idproducts`),
  INDEX `fk_products_categories1_idx` (`categories_idcategories` ASC) VISIBLE,
  CONSTRAINT `fk_products_categories1`
    FOREIGN KEY (`categories_idcategories`)
    REFERENCES `YumYum-Database`.`categories` (`idcategories`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `YumYum-Database`.`cart`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `YumYum-Database`.`cart` (
  `products_idproducts` INT NOT NULL,
  `users_idusers` INT NOT NULL,
  `total_price` DOUBLE NOT NULL,
  `amount` INT NOT NULL,
  PRIMARY KEY (`products_idproducts`, `users_idusers`),
  INDEX `fk_products_has_users_users1_idx` (`users_idusers` ASC) VISIBLE,
  INDEX `fk_products_has_users_products_idx` (`products_idproducts` ASC) VISIBLE,
  CONSTRAINT `fk_products_has_users_products`
    FOREIGN KEY (`products_idproducts`)
    REFERENCES `YumYum-Database`.`products` (`idproducts`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_products_has_users_users1`
    FOREIGN KEY (`users_idusers`)
    REFERENCES `YumYum-Database`.`users` (`idusers`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
