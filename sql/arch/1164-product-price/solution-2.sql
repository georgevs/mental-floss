create view product_changes_before_on_target as
  select *, rank() over (partition by product_id order by change_date desc) as rnk
  from Products
  where change_date <= date('2019-08-16')
;

create view solution as
  select distinct p.product_id, coalesce(l.new_price, 10) as price
  from Products p left join product_changes_before_on_target l
    on p.product_id = l.product_id and l.rnk = 1
;

select * from solution;
select * from product_changes_before_on_target;

select * from Expected;
select * from Products;
