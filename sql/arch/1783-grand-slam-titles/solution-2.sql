with 

year_champoins as (
  select year, Wimbledon as id from Championships
  union all select year, Fr_open as id from Championships
  union all select year, US_open as id from Championships
  union all select year, Au_open as id from Championships
)

select p.player_id, p.player_name, count(c.id) as grand_slams_count
  from Players p join year_champoins c on p.player_id = c.id
  group by p.player_id, p.player_name
;
