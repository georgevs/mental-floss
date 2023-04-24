
create view person_country as
  select p.id, p.name as person_name, p.phone_number,
    y.name as country_name, y.country_code
  from Person p
    left join Country y on instr(p.phone_number, y.country_code) = 1;

create view calls_country as
  select caller.country_code as caller_country_code,
    callee.country_code as callee_country_code,
    c.duration
  from Calls c
    left join person_country caller on c.caller_id = caller.id
    left join person_country callee on c.callee_id = callee.id;

create view country_calls_out as
  select y.name, cc.duration 
  from Country y
    left join calls_country cc on y.country_code = cc.caller_country_code
  where cc.duration is not null;

create view country_calls_in as
  select y.name, cc.duration 
  from Country y
    left join calls_country cc on y.country_code = cc.callee_country_code
  where cc.duration is not null;

create view country_calls as
  select * from country_calls_out 
  union all select * from country_calls_in;

create view avg_country_calls as
  select name, sum(duration) / count(duration) as duration
  from country_calls
  group by name;

create view avg_total_calls as
  select avg(duration) as duration from country_calls;

create view solution as 
  select name as country
  from avg_country_calls
  where duration > (select avg(duration) from country_calls);


select * from solution order by country;
select * from Expected order by country;
