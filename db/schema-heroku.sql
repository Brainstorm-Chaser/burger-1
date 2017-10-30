### Schema
-- DROP DATABASE IF EXISTS burgertest_db;
-- 
-- CREATE DATABASE burgertest_db;
-- USE heroku_28437b49d76cc53;

CREATE TABLE `heroku_44781f3abe4cedc`.`burgers`
(
  id int NOT NULL AUTO_INCREMENT,
  burger_name varchar(255) NOT NULL,
  devoured BOOLEAN DEFAULT false,
  `date` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id)
);

