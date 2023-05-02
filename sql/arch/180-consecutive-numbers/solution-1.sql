create view nums as 
  select num, 
    lag(num) over () as prev_num,
    lead(num) over () as next_num
  from Logs
;

create view solution as
  select distinct num as ConsecutiveNums
  from nums
  where num = prev_num and num = next_num
;

select * from solution;
select * from nums;

select * from Expected;
select * from Logs;
