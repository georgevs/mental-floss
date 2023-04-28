create view managers as
  select 
      e.reports_to as employee_id, 
      o.name as name, 
      count(e.age) as reports_count,
      round(avg(e.age)) as average_age
    from Employees e
      left join Employees o on e.reports_to = o.employee_id
    where e.reports_to is not null
    group by e.reports_to, o.name
    order by e.reports_to
;

select * from managers;

select * from Expected;
select * from Employees;
