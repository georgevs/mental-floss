# 1459. Rectangles Area

Table: Points
```
+---------------+---------+
| Column Name   | Type    |
+---------------+---------+
| id            | int     |
| x_value       | int     |
| y_value       | int     |
+---------------+---------+
```
id is the primary key for this table.
Each point is represented as a 2D coordinate (x_value, y_value).
 

Write an SQL query to report all possible axis-aligned rectangles with a non-zero area that can be formed by any two points from the Points table.

Each row in the result should contain three columns (p1, p2, area) where:

- p1 and p2 are the id's of the two points that determine the opposite corners of a rectangle.
- area is the area of the rectangle and must be non-zero.

Return the result table ordered by area in descending order. If there is a tie, order them by p1 in ascending order. If there is still a tie, order them by p2 in ascending order.

The query result format is in the following table.
