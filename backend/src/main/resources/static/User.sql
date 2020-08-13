CREATE TABLE user
(
    `id`            INT             NOT NULL    AUTO_INCREMENT,
    `user_id`       VARCHAR(45)     NOT NULL,
    `name`      VARCHAR(45)     NOT NULL,
    `password`       VARCHAR(45)     NOT NULL,
    `birth_date`    VARCHAR(45)     NOT NULL,
    `gender`    VARCHAR(45)     NOT NULL,
    `address`       VARCHAR(100)    NOT NULL,
    `latitude`       DECIMAL(10,8) ,
    `longitude`       DECIMAL(11, 8),
    `email`         VARCHAR(45),
    `join_date`     VARCHAR(45),
    `optional_addr`  VARCHAR(100),
    `phone_number`         VARCHAR(45),
    PRIMARY KEY (id)
);