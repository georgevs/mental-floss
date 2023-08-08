select *
from Schools;

select *
from Exam;

select *
from Expected;

create view solution as
select s.school_id,
  coalesce(min(e.score), -1) as score
from Schools s
  left join (
    select *
    from Exam
  ) e on s.capacity >= e.student_count
group by s.school_id;

select *
from solution;