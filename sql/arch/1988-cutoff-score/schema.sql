drop schema if exists leetcode;
create schema leetcode;
use leetcode;

create table if not exists Schools (school_id int, capacity int);
create table if not exists Exam (score int, student_count int);
create table if not exists Expected (school_id int, score int);