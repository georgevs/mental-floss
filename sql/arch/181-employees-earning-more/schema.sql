drop schema if exists leetcode;
create schema leetcode;
use leetcode;

Create table If Not Exists Employee (
  id int,
  name varchar(255),
  salary int,
  managerId int
);

create table if not exists Expected (Employee varchar(255));
