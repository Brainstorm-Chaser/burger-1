### Schema
-- DROP DATABASE IF EXISTS burgertest_db;
-- 
-- CREATE DATABASE burgertest_db;
-- USE burgertest_db;

-- JAWSDB 
USE lxom1nolscwa8q4w;

CREATE TABLE `burgers`
(
  id int NOT NULL AUTO_INCREMENT,
  burger_name varchar(255) NOT NULL,
  devoured BOOLEAN DEFAULT false,
  `date` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id)
);

