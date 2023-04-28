drop schema if exists leetcode;
create schema leetcode;
use leetcode;

Create table If Not Exists LogInfo (account_id int, ip_address int, login datetime, logout datetime);
create table if not exists Expected (account_id int);
