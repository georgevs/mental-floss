# 1631. Path With Minimum Effort

## References

- https://leetcode.com/explore/learn/card/graph/622/single-source-shortest-path-algorithm/3952/
- https://leetcode.com/problems/path-with-minimum-effort/

## Description

You are a hiker preparing for an upcoming hike. You are given `heights`, a 2D array of size rows x columns, where heights[row][col] represents the height of cell (row, col). You are situated in the top-left cell, (0, 0), and you hope to travel to the bottom-right cell, (rows-1, columns-1) (i.e., 0-indexed). You can move up, down, left, or right, and you wish to find a route that requires the minimum effort.

A route's effort is the maximum absolute difference in heights between two consecutive cells of the route.

Return the minimum effort required to travel from the top-left cell to the bottom-right cell.

Constraints:

- rows == heights.length
- columns == heights[i].length
- 1 <= rows, columns <= 100
- 1 <= heights[i][j] <= 106

## Test
```
node test
```

## Performance
```
seq 5 | time node minimum-effort-path 100000
```
