drop schema if exists leetcode;
create schema leetcode;

use leetcode;
create table if not exists Visits(visit_id int, customer_id int);
create table if not exists Transactions(transaction_id int, visit_id int, amount int);
