create view solution as
  with expr_with_left_values as (
    select e.*, l.value as left_value
    from Expressions e left join Variables l on l.name = e.left_operand
  ),
  expr_with_both_values as (
    select e.*, r.value as right_value
    from expr_with_left_values e left join Variables r on r.name = e.right_operand
  ),
  expr_values as (
    select left_operand, operator, right_operand, 
      case operator
        when '>' then left_value > right_value
        when '=' then left_value = right_value
        when '<' then left_value < right_value
      end as int_value
    from expr_with_both_values
  )
  select left_operand, operator, right_operand,
    if(int_value = 1, 'true', 'false') as value 
  from expr_values;
