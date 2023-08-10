Truncate table Stocks;
insert into Stocks (stock_name, operation, operation_day, price) values ('Leetcode', 'Buy', '1', '1000');
insert into Stocks (stock_name, operation, operation_day, price) values ('Corona Masks', 'Buy', '2', '10');
insert into Stocks (stock_name, operation, operation_day, price) values ('Leetcode', 'Sell', '5', '9000');
insert into Stocks (stock_name, operation, operation_day, price) values ('Handbags', 'Buy', '17', '30000');
insert into Stocks (stock_name, operation, operation_day, price) values ('Corona Masks', 'Sell', '3', '1010');
insert into Stocks (stock_name, operation, operation_day, price) values ('Corona Masks', 'Buy', '4', '1000');
insert into Stocks (stock_name, operation, operation_day, price) values ('Corona Masks', 'Sell', '5', '500');
insert into Stocks (stock_name, operation, operation_day, price) values ('Corona Masks', 'Buy', '6', '1000');
insert into Stocks (stock_name, operation, operation_day, price) values ('Handbags', 'Sell', '29', '7000');
insert into Stocks (stock_name, operation, operation_day, price) values ('Corona Masks', 'Sell', '10', '10000');

select * from Stocks;

select stock_name, sum(if(operation = 'Buy', - price, price)) as capital_gain_loss
from Stocks
group by stock_name;

with daily_bal as (
  select stock_name, if(operation = 'Buy', - price, price) as bal
  from Stocks
)
select stock_name, sum(bal) as capital_gain_loss
from daily_bal
group by stock_name;