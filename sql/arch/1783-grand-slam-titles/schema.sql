drop schema if exists leetcode;
create schema leetcode;
use leetcode;

Create table If Not Exists Players (player_id int, player_name varchar(20));

Create table If Not Exists Championships (
  year int,
  Wimbledon int,
  Fr_open int,
  US_open int,
  Au_open int
);

create table if not exists Expected(
  player_id int,
  player_name varchar(20),
  grand_slams_count int
);
