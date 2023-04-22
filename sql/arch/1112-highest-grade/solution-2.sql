create view solution as 
  with t as (
    select *, 
      dense_rank() over (partition by student_id order by grade desc, course_id) as rnk
    from Enrollments
  )
  select student_id, course_id, grade
  from t
  where rnk = 1;