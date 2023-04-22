create view solution as
  with managers as (
    select e.id from Employee e
    where exists (select 1 from Employee o where o.managerId = e.id limit 1)
  ),
  big_managers as (
    select m.id
    from managers m left join Employee e on m.id = e.managerId 
    group by m.id
    having count(e.id) >= 5
  )
  select name from big_managers m left join Employee e on m.id = e.id;