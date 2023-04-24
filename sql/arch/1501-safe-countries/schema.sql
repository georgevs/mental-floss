drop schema if exists leetcode;
create schema leetcode;
use leetcode;

Create table If Not Exists Person (id int, name varchar(15), phone_number varchar(11));
Create table If Not Exists Country (name varchar(15), country_code varchar(3));
Create table If Not Exists Calls (caller_id int, callee_id int, duration int);

create table Output (country varchar(15));
create table Expected (country varchar(15));
