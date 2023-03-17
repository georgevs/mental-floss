select name, sum(ifnull(distance, 0)) as travelled_distance
from Users u left join Rides r on u.id = r.user_id
group by u.id, name
order by travelled_distance desc, name asc;
