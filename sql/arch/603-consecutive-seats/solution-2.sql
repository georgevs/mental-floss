create view neighbour_seats as
  select 
    seat_id,
    free,
    lag(free) over () as prev_free,
    lead(free) over () as next_free
  from Cinema
;

create view solution as 
  select seat_id
  from neighbour_seats
  where free and (next_free or prev_free)
;

select * from solution;

select * from Expected;
select * from Cinema;
