create view solution as
  select e.name as Employee
    from Employee e
      left join Employee o on
        e.managerId = o.id
  where e.salary > o.salary
;

select * from solution;

select * from Expected;
select * from Employee;