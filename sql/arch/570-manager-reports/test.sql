Truncate table Employee;
insert into Employee (id, name, department, managerId) values ('101', 'John', 'A', NULL);
insert into Employee (id, name, department, managerId) values ('102', 'Dan', 'A', '101');
insert into Employee (id, name, department, managerId) values ('103', 'James', 'A', '101');
insert into Employee (id, name, department, managerId) values ('104', 'Amy', 'A', '101');
insert into Employee (id, name, department, managerId) values ('105', 'Anne', 'A', '101');
insert into Employee (id, name, department, managerId) values ('106', 'Ron', 'B', '101');



-- truncate table Employee;
-- insert into Employee(id,name,department,managerId) values('101','John','A',NULL);
-- insert into Employee(id,name,department,managerId) values('102','Dan','A','100');
-- insert into Employee(id,name,department,managerId) values('103','James','A','100');
-- insert into Employee(id,name,department,managerId) values('104','Amy','A','100');
-- insert into Employee(id,name,department,managerId) values('105','Anne','A','100');
-- insert into Employee(id,name,department,managerId) values('106','Ron','B','100');


truncate table Employee;
insert into Employee(id,name,department,managerId) values('101','John','A',NULL);
insert into Employee(id,name,department,managerId) values('102','Dan','A','101');
insert into Employee(id,name,department,managerId) values('103','James','A','101');
insert into Employee(id,name,department,managerId) values('104','Amy','A','101');
insert into Employee(id,name,department,managerId) values('105','Anne','A','101');
insert into Employee(id,name,department,managerId) values('106','Ron','B','101');
insert into Employee(id,name,department,managerId) values('107','Tom','A','102');
insert into Employee(id,name,department,managerId) values('108','Tommy','A','102');
insert into Employee(id,name,department,managerId) values('109','Peter','C','102');
insert into Employee(id,name,department,managerId) values('110','Dong','A','102');
insert into Employee(id,name,department,managerId) values('111','DIDI','D','102');

select * from Employee;

select * from solution;
