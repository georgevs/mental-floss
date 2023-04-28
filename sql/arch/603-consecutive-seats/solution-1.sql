create view solution as 
  select c.seat_id
  from Cinema c 
       left join Cinema n on c.seat_id + 1 = n.seat_id
       left join Cinema p on c.seat_id - 1 = p.seat_id
  where c.free and coalesce(p.free, 0) + c.free + coalesce(n.free, 0) > 1
;

select * from solution;

select * from Expected;
select * from Cinema;
