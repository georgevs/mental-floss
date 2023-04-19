drop schema if exists leetcode;
create schema leetcode;
use leetcode;

Create table If Not Exists Warehouse (name varchar(50), product_id int, units int);
Create table If Not Exists Products (
  product_id int,
  product_name varchar(50),
  Width int,
  Length int,
  Height int
);
