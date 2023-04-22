create view solution as 
  with max_grades as (
    select student_id, max(grade) as max_grade
    from Enrollments
    group by student_id
  )
  select e.student_id, min(e.course_id) as course_id, e.grade
  from Enrollments e left join max_grades g on e.student_id = g.student_id
  where e.grade = g.max_grade
  group by student_id, grade
  order by student_id;
  