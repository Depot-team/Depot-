-- -- MySQL Workbench Forward Engineering

-- SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
-- SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
-- SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -- -----------------------------------------------------
-- -- Schema mydb
-- -- -----------------------------------------------------
-- -- -----------------------------------------------------
-- -- Schema depot
-- -- -----------------------------------------------------

-- -- -----------------------------------------------------
-- -- Schema depot
-- -- -----------------------------------------------------
-- CREATE SCHEMA IF NOT EXISTS `depot` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
-- USE `depot` ;

-- -- -----------------------------------------------------
-- -- Table `depot`.`fournisseur`
-- -- -----------------------------------------------------
-- CREATE TABLE IF NOT EXISTS `depot`.`fournisseur` (
--   `id` INT NOT NULL AUTO_INCREMENT,
--   `CompanyName` VARCHAR(45) NOT NULL,
--   `manager` VARCHAR(45) NULL DEFAULT NULL,
--   `email` VARCHAR(255) NOT NULL,
--   `password` VARCHAR(45) NOT NULL,
--   `image` LONGTEXT NULL DEFAULT NULL,
--   `adress` VARCHAR(255) NULL DEFAULT NULL,
--   `phoneNumber` INT NULL DEFAULT NULL,
--   PRIMARY KEY (`id`),
--   UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE)
-- ENGINE = InnoDB
-- DEFAULT CHARACTER SET = utf8mb4
-- COLLATE = utf8mb4_0900_ai_ci;


-- -- -----------------------------------------------------
-- -- Table `depot`.`user`
-- -- -----------------------------------------------------
-- CREATE TABLE IF NOT EXISTS `depot`.`user` (
--   `id` INT NOT NULL AUTO_INCREMENT,
--   `name` VARCHAR(45) NOT NULL,
--   `email` VARCHAR(255) NOT NULL,
--   `password` VARCHAR(45) NULL DEFAULT NULL,
--   `adress` VARCHAR(255) NOT NULL,
--   `phoneNumber` INT NULL DEFAULT NULL,
--   PRIMARY KEY (`id`))
-- ENGINE = InnoDB
-- DEFAULT CHARACTER SET = utf8mb4
-- COLLATE = utf8mb4_0900_ai_ci;


-- -- -----------------------------------------------------
-- -- Table `depot`.`product`
-- -- -----------------------------------------------------
-- CREATE TABLE IF NOT EXISTS `depot`.`product` (
--   `id` INT NOT NULL AUTO_INCREMENT,
--   `name` VARCHAR(45) NOT NULL,
--   `quantity` INT NOT NULL,
--   `description` VARCHAR(255) NULL DEFAULT NULL,
--   `price` INT NULL DEFAULT NULL,
--   `image` LONGTEXT NULL DEFAULT NULL,
--   `user_id` INT NOT NULL,
--   `fournisseur_id` INT NOT NULL,
--   PRIMARY KEY (`id`, `user_id`, `fournisseur_id`),
--   INDEX `fk_product_user_idx` (`user_id` ASC) VISIBLE,
--   INDEX `fk_product_fournisseur1_idx` (`fournisseur_id` ASC) VISIBLE,
--   CONSTRAINT `fk_product_user`
--     FOREIGN KEY (`user_id`)
--     REFERENCES `depot`.`user` (`id`)
--     ON DELETE NO ACTION
--     ON UPDATE NO ACTION,
--   CONSTRAINT `fk_product_fournisseur1`
--     FOREIGN KEY (`fournisseur_id`)
--     REFERENCES `depot`.`fournisseur` (`id`)
--     ON DELETE NO ACTION
--     ON UPDATE NO ACTION)
-- ENGINE = InnoDB
-- DEFAULT CHARACTER SET = utf8mb4
-- COLLATE = utf8mb4_0900_ai_ci;


-- SET SQL_MODE=@OLD_SQL_MODE;
-- SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
-- SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
