drop schema if exists leetcode;
create schema leetcode;
use leetcode;

Create table If Not Exists Customers (customer_id int, customer_name varchar(30));
Create table If Not Exists Orders (order_id int, customer_id int, product_name varchar(30));
