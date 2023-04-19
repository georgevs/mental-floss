Truncate table Product;
insert into Product (product_id, product_name, unit_price) values ('1', 'S8', '1000');
insert into Product (product_id, product_name, unit_price) values ('2', 'G4', '800');
insert into Product (product_id, product_name, unit_price) values ('3', 'iPhone', '1400');
Truncate table Sales;
insert into Sales (seller_id, product_id, buyer_id, sale_date, quantity, price) values ('1', '1', '1', '2019-01-21', '2', '2000');
insert into Sales (seller_id, product_id, buyer_id, sale_date, quantity, price) values ('1', '2', '2', '2019-02-17', '1', '800');
insert into Sales (seller_id, product_id, buyer_id, sale_date, quantity, price) values ('2', '2', '3', '2019-06-02', '1', '800');
insert into Sales (seller_id, product_id, buyer_id, sale_date, quantity, price) values ('3', '3', '4', '2019-05-13', '2', '2800');

select * from Product;
select * from Sales;

select sale_date, product_id, sum(quantity) over (partition by product_id order by sale_date) as running_quantity
from Sales;

with sales_window as (
  select product_id, min(sale_date) as min_sale_date, max(sale_date) as max_sale_date
  from Sales
  group by product_id
  having min_sale_date between date('2019-01-01') and date('2019-03-31')
    and max_sale_date between date('2019-01-01') and date('2019-03-31')
)
select p.product_id, p.product_name
from Product p inner join sales_window s on p.product_id = s.product_id;


-- delimiter ;;
-- create function cumulative_sum(val int)
-- returns int no sql
-- begin
--   declare result int default 0;
--   set result = @cumulative_sum + val;
--   set @cumulative_sum = result;
--   return result;
-- end ;;
-- delimiter ;

-- select product_id, cumulative_sum(quantity) as running_quantity
-- from Sales;


DELIMITER //

CREATE FUNCTION cumulative_sum (input_val FLOAT) RETURNS FLOAT no sql
BEGIN
    DECLARE output_val FLOAT DEFAULT 0;
    SET output_val = @cumulative_sum + input_val;
    SET @cumulative_sum = output_val;
    RETURN output_val;
END//

DELIMITER ;

select product_id, quantity, sum(quantity) over (partition by product_id order by sale_date) as running_total
from Sales;

select product_id, quantity, cumulative_sum(quantity) over (partition by product_id order by sale_date) as running_total
from Sales;