drop schema if exists leetcode;
create schema leetcode;
use leetcode;

Create table If Not Exists Schools (school_id int, capacity int);
Create table If Not Exists Exam (score int, student_count int);

create table if not exists Expected(school_id int, score int);
