drop schema if exists leetcode;
create schema leetcode;
use leetcode;

Create table If Not Exists Users (account int, name varchar(20));
Create table If Not Exists Transactions (
  trans_id int,
  account int,
  amount int,
  transacted_on date
);
