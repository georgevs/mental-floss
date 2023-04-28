truncate table Employees;
insert into Employees(employee_id,name,reports_to,age) values('9','Hercy',NULL,'43');
insert into Employees(employee_id,name,reports_to,age) values('6','Alice','9','41');
insert into Employees(employee_id,name,reports_to,age) values('4','Bob','9','36');
insert into Employees(employee_id,name,reports_to,age) values('2','Winston',NULL,'37');
truncate table Expected;
insert into Expected(employee_id,name,reports_count,average_age) values('9','Hercy','2','39');
