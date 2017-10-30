-- USE `heroku_44781f3abe4cedc`.`burgers`;

INSERT INTO `burgers` (burger_name) VALUES ('Boca');
INSERT INTO `burgers` (burger_name, devoured) VALUES ('Portobello', true);
INSERT INTO `burgers` (burger_name, devoured) VALUES ('Fakin\' Bacon', true);

SELECT * FROM `burgers`;

-- ClearDB
-- INSERT INTO `heroku_44781f3abe4cedc`.`burgers` (burger_name) VALUES ('Boca');
-- INSERT INTO `heroku_44781f3abe4cedc`.`burgers` (burger_name, devoured) VALUES ('Portobello', true);
-- INSERT INTO `heroku_44781f3abe4cedc`.`burgers` (burger_name, devoured) VALUES ('Fakin\' Bacon', true);

-- SELECT * FROM `heroku_44781f3abe4cedc`.`burgers`;