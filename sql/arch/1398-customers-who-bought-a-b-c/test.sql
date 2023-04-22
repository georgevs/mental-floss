Truncate table Customers;
insert into Customers (customer_id, customer_name) values ('1', 'Daniel');
insert into Customers (customer_id, customer_name) values ('2', 'Diana');
insert into Customers (customer_id, customer_name) values ('3', 'Elizabeth');
insert into Customers (customer_id, customer_name) values ('4', 'Jhon');
Truncate table Orders;
insert into Orders (order_id, customer_id, product_name) values ('10', '1', 'A');
insert into Orders (order_id, customer_id, product_name) values ('20', '1', 'B');
insert into Orders (order_id, customer_id, product_name) values ('30', '1', 'D');
insert into Orders (order_id, customer_id, product_name) values ('40', '1', 'C');
insert into Orders (order_id, customer_id, product_name) values ('50', '2', 'A');
insert into Orders (order_id, customer_id, product_name) values ('60', '3', 'A');
insert into Orders (order_id, customer_id, product_name) values ('70', '3', 'B');
insert into Orders (order_id, customer_id, product_name) values ('80', '3', 'D');
insert into Orders (order_id, customer_id, product_name) values ('90', '4', 'C');

select * from Orders;
select * from Orders;

select *
from Customers c left join Orders o on c.customer_id = o.customer_id;

select c.customer_id, c.customer_name, o.product_name
from Customers c left join Orders o on c.customer_id = o.customer_id;

select c.customer_id, c.customer_name, 
  sum(o.product_name = 'A') as cnt_a,
  sum(o.product_name = 'B') as cnt_b,
  sum(o.product_name = 'C') as cnt_c
from Customers c left join Orders o on c.customer_id = o.customer_id
group by c.customer_id, c.customer_name;

select * from solution;
