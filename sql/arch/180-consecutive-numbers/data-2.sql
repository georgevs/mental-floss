truncate table Logs;
insert into Logs(id,num) values('1','-1');
insert into Logs(id,num) values('2','-1');
insert into Logs(id,num) values('3','-1');
truncate table Expected;
insert into Expected(ConsecutiveNums) values('-1');
