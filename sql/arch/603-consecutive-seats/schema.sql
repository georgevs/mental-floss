drop schema if exists leetcode;
create schema leetcode;
use leetcode;

Create table If Not Exists Cinema (
  seat_id int primary key auto_increment,
  free bool
);

create table if not exists Expected (seat_id int);
