create view solution AS
  with t as (
    select c.customer_id, c.customer_name, 
        sum(o.product_name = 'A') as cnt_a,
        sum(o.product_name = 'B') as cnt_b,
        sum(o.product_name = 'C') as cnt_c
      from Customers c left join Orders o on c.customer_id = o.customer_id
      group by c.customer_id, c.customer_name
  )
  select customer_id, customer_name
  from t
  where cnt_a > 0 and cnt_b > 0 and cnt_c = 0
  order by customer_id;
