Truncate table Variables;
insert into Variables (name, value) values ('x', '66');
insert into Variables (name, value) values ('y', '77');
Truncate table Expressions;
insert into Expressions (left_operand, operator, right_operand) values ('x', '>', 'y');
insert into Expressions (left_operand, operator, right_operand) values ('x', '<', 'y');
insert into Expressions (left_operand, operator, right_operand) values ('x', '=', 'y');
insert into Expressions (left_operand, operator, right_operand) values ('y', '>', 'x');
insert into Expressions (left_operand, operator, right_operand) values ('y', '<', 'x');
insert into Expressions (left_operand, operator, right_operand) values ('x', '=', 'x');

-- select * from Variables;
-- select * from Expressions;


truncate table Variables;
insert into Variables(name,value) values('x','77');
insert into Variables(name,value) values('y','77');
truncate table Expressions;
insert into Expressions(left_operand,operator,right_operand) values('x','>','y');
insert into Expressions(left_operand,operator,right_operand) values('x','<','y');
insert into Expressions(left_operand,operator,right_operand) values('x','=','y');
insert into Expressions(left_operand,operator,right_operand) values('y','>','x');
insert into Expressions(left_operand,operator,right_operand) values('y','<','x');
insert into Expressions(left_operand,operator,right_operand) values('x','=','x');

select * from Variables;
select * from Expressions;

select * from solution;
