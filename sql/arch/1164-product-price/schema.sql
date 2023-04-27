drop schema if exists leetcode;
create schema leetcode;
use leetcode;

Create table If Not Exists Products (product_id int, new_price int, change_date date);
create table if not exists Expected (product_id int, price int);
