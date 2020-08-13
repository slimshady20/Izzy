CREATE TABLE statistics
(
    `key_id`    INT NOT NULL  AUTO_INCREMENT,
    `visit` VARCHAR(45) NOT NULL ,
    `daily_profit` VARCHAR(45) NOT NULL ,
    `monthly_profit` VARCHAR(45) NOT NULL ,
    `yearly_profit` VARCHAR(45) NOT NULL ,
    `pattern` VARCHAR(45) NOT NULL,
    PRIMARY KEY (key_id)

);