drop schema if exists leetcode;
create schema leetcode;
use leetcode;

Create table If Not Exists Sales (
  sale_date date,
  fruit ENUM('apples', 'oranges'),
  sold_num int
);
