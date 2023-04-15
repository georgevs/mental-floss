# 1141. User Activity for the Past 30 Days I

Write an SQL query to find the daily active user count for a period of 30 days ending 2019-07-27 inclusively. A user was active on someday if they made at least one activity on that day.

Return the result table in any order.

## Test
```
cat schema.sql | mysql; cat solution.sql test.sql | mysql --table leetcode
```

## Load data and test
```
cat schema.sql solution.sql | mysql ;\
perl ../parse_data.pl data-500.txt | mysql leetcode ;\
mysql --table leetcode << EOF
  SELECT * FROM solution;
EOF
```

