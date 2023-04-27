create view product_last_change_on_target as
  select product_id, max(change_date) as last_change_date
  from Products
  where change_date <= date('2019-08-16')
  group by product_id
;

create view solution as
  select c.product_id, coalesce(p.new_price, 10) as price
  from (select distinct product_id from Products) as c
    left join product_last_change_on_target l 
      on c.product_id = l.product_id
    left join Products p
      on p.product_id = l.product_id and p.change_date = l.last_change_date
;

select * from solution;
select * from product_last_change_on_target;

select * from Expected;
select * from Products;
