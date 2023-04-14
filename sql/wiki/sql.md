# SQL Language

## Schema
```
CREATE SCHEMA `new_schema` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

SHOW DATABASES;
```

## Table
```
CREATE TABLE `new_schema`.`new_table` (
  `id` INT NOT NULL COMMENT 'This is a primary index',
  PRIMARY KEY (`id`)
);

SHOW TABLES FROM `new_schema`;
SHOW FULL COLUMNS FROM `new_schema`.`new_table`;

TRUNCATE `new_schema`.`new_table`;

DROP TABLE `new_schema`.`new_table`;
```

## Transactions
```
START TRANSACTION;

SELECT `new_schema`.`products` WHERE id = 5;
UPDATE `new_schema`.`products` SET `price` = '500' WHERE id = 5;

IF (@correct) THEN
  COMMIT;
ELSE
  ROLLBACK;
END IF;
```

## Raise user exception
```
DELIMITER ;;

CREATE PROCEDURE raise_exception(IN message_text VARCHAR(128))
BEGIN
  DECLARE unhandled_exception CONDITION FOR SQLSTATE VALUE '45000';
  SIGNAL unhandled_exception SET MESSAGE_TEXT = message_text;
END ;;

DELIMITER ;

CALL raise_exception('My exception message text');
```
