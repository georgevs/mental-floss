drop schema if exists leetcode;
create schema leetcode;
use leetcode;

Create Table If Not Exists Stocks (
  stock_name varchar(15),
  operation ENUM('Sell', 'Buy'),
  operation_day int,
  price int
);
