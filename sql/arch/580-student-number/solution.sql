create view solution as
  select d.dept_name, count(s.student_id) as student_number
  from Department d left join Student s on d.dept_id = s.dept_id
  group by d.dept_name
;

select * from solution order by student_number desc, dept_name;
select * from Expected;
select * from Department;
select * from Student;
