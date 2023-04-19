drop schema if exists leetcode;
create schema leetcode;
use leetcode;

Create table If Not Exists Product (
  product_id int,
  product_name varchar(10),
  unit_price int
);
Create table If Not Exists Sales (
  seller_id int,
  product_id int,
  buyer_id int,
  sale_date date,
  quantity int,
  price int
);
