truncate table Points;
insert into Points(id,x_value,y_value) values('1','2','7');
insert into Points(id,x_value,y_value) values('2','4','8');
insert into Points(id,x_value,y_value) values('3','2','10');
truncate table Expected;
insert into Expected(p1,p2,area) values('2','3','4');
insert into Expected(p1,p2,area) values('1','2','2');
