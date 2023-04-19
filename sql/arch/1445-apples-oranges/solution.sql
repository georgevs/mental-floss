create view solution as
  select sale_date,
    sum(if(fruit = 'apples', sold_num, - sold_num)) as diff
  from Sales
  group by sale_date
  order by sale_date;
