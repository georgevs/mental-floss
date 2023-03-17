with cte as (
  select customer_number,
    count(*) as num_orders
  from orders
  group by customer_number
  order by num_orders desc
  limit 1
)
select customer_number
from cte;
