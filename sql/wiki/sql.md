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
