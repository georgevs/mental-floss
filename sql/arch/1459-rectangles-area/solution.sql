create view rectangles as
  select u.id as P1, 
    v.id as P2, 
    (abs(u.x_value - v.x_value) * abs(u.y_value - v.y_value)) as AREA
  from Points u left join Points v on u.id < v.id
  where u.x_value != v.x_value and u.y_value != v.y_value
  order by AREA desc, P1 asc, P2 asc
;

select * from rectangles;

select * from Expected;
select * from Points;
