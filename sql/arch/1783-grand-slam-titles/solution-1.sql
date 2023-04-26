
create view player_championships as
  select p.*, c.year, (c.Wimbledon = p.player_id) + 
        (c.Fr_open = p.player_id) +
        (c.US_open = p.player_id) +
        (c.Au_open = p.player_id) as yearly_grand_slams_count
  from Players p left join Championships c
    on (c.Wimbledon = p.player_id) + 
        (c.Fr_open = p.player_id) +
        (c.US_open = p.player_id) +
        (c.Au_open = p.player_id) > 0
  having yearly_grand_slams_count > 0 
;

create view solution as
  select player_id, player_name, sum(yearly_grand_slams_count) as grand_slams_count
  from player_championships
  group by player_id, player_name
;
     
select * from solution;
select * from player_championships;

select * from Players;
select * from Championships;
select * from Expected;
