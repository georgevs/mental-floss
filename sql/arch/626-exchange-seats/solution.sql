create view seat_pairs as 
  select s.id, s.student as odd_student, o.student as even_student 
  from Seat s left join Seat o on s.id + 1 = o.id
  where s.id & 1 = 1
;

create view unordered_solution as
  select id, if(even_student is not null, even_student, odd_student) as student from seat_pairs
  union select id + 1 as id, odd_student as student from seat_pairs where even_student is not null
;

create view solution as
  select * from unordered_solution
  order by id
;

select * from solution;
select * from Expected;
select * from Seat;
