create view solution as
  with big_managers as (
    select managerId as id
    from Employee
    group by managerId
    having count(managerId) >= 5
  )
  select name 
  from Employee as e join big_managers m on e.id = m.id;
  