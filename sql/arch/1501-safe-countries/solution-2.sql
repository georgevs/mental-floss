create view all_calls as
  select caller_id as id, duration from Calls
  union all
  select callee_id as id, duration from Calls;

create view person_country as
  select p.id, y.name as country_name
  from Person p
    join Country y on y.country_code = left(p.phone_number, 3);

create view solution as
  select p.country_name as country
  from person_country p
    join all_calls c on p.id = c.id
  group by p.country_name
  having avg(duration) > (select avg(duration) from all_calls);
  

select * from solution order by country;
select * from Expected order by country;
