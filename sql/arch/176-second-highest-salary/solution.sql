-- create view solution as
--   with 
--     t1 as (
--       select distinct salary from Employee
--       order by salary limit 1 offset 1
--     ),
--     t2 as (
--       select null as salary
--     ),
--     t3 as (
--       select * from t1
--       union select * from t2
--     )
--   select salary as SecondHighestSalary from t3
--   limit 1;


create view solution AS
  select (
    select distinct salary from Employee
    order by salary asc
    limit 1 offset 1
  ) as SecondHighestSalary;

