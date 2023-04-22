drop schema if exists leetcode;
create schema leetcode;
use leetcode;

Create table If Not Exists Employee (
  id int,
  name varchar(255),
  department varchar(255),
  managerId int
);
