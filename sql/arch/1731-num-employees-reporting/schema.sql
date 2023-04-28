drop schema if exists leetcode;
create schema leetcode;
use leetcode;

Create table If Not Exists Employees(
  employee_id int,
  name varchar(20),
  reports_to int,
  age int
);

create table if not exists Expected(
  employee_id int,
  name varchar(20),
  reports_count int,
  average_age int
);
