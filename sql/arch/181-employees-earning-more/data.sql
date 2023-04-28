truncate table Employee;
insert into Employee(id,name,salary,managerId) values('1','Joe','70000','3');
insert into Employee(id,name,salary,managerId) values('2','Henry','80000','4');
insert into Employee(id,name,salary,managerId) values('3','Sam','60000',NULL);
insert into Employee(id,name,salary,managerId) values('4','Max','90000',NULL);
truncate table Expected;
insert into Expected(Employee) values('Joe');
