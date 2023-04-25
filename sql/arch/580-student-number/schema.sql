drop schema if exists leetcode;
create schema leetcode;
use leetcode;

Create table If Not Exists Student (
  student_id int,
  student_name varchar(45),
  gender varchar(6),
  dept_id int
);
Create table If Not Exists Department (dept_id int, dept_name varchar(255));

create table if not exists Expected(dept_name varchar(255), student_number int);
