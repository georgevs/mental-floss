create view depatment_max_salary as
  select departmentId, max(salary) as max_salary
  from Employee
  group by departmentId
;

create view solution as
  select d.name as Department, e.name as Employee, e.salary as Salary
  from Employee e left join depatment_max_salary dms on e.departmentId = dms.departmentId
    left join Department d on e.departmentId = d.id
  where e.salary = dms.max_salary
;

select * from solution;
select * from depatment_max_salary;


select * from Employee;
select * from Department;
select * from Expected;
