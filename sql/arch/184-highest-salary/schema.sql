drop schema if exists leetcode;
create schema leetcode;
use leetcode;

Create table If Not Exists Employee (id int, name varchar(255), salary int, departmentId int);
Create table If Not Exists Department (id int, name varchar(255));

create table if not exists Expected(
  Department varchar(255),
  Employee varchar(255),
  Salary int
);