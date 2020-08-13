CREATE TABLE article
(
    `article_id`    INT NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(45) NOT NULL ,
    `contents` VARCHAR(45) NOT NULL ,
    `writer` VARCHAR(45) NOT NULL ,
    `reg_date` VARCHAR(45) NOT NULL ,
    `image` VARCHAR(45) NOT NULL ,
    `video` VARCHAR(45) NOT NULL ,
    `com_contents` VARCHAR(45) NOT NULL ,
    `com_writer` VARCHAR(45) NOT NULL ,
    `com_reg_date` VARCHAR(45) NOT NULL,
        PRIMARY KEY (article_id)
);