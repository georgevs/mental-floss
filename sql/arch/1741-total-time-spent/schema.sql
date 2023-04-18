drop schema if exists leetcode;
create schema leetcode;
use leetcode;

Create table If Not Exists Employees(
  emp_id int,
  event_day date,
  in_time int,
  out_time int
);
