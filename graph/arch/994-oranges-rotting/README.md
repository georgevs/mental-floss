# 994. Rotting Oranges

## References
- https://leetcode.com/explore/learn/card/graph/620/breadth-first-search-in-graph/3898/
- https://leetcode.com/problems/rotting-oranges/

## Description
You are given an m x n grid where each cell can have one of three values:

0 representing an empty cell,
1 representing a fresh orange, or
2 representing a rotten orange.
Every minute, any fresh orange that is 4-directionally adjacent to a rotten orange becomes rotten.

Return the minimum number of minutes that must elapse until no cell has a fresh orange. If this is impossible, return -1.

Constraints:
- m == grid.length
- n == grid[i].length
- 1 <= m, n <= 10
- grid[i][j] is 0, 1, or 2.

## Tests
```
find . -name 'test*' | xargs -L1 node
```

## Performance
```
time node oranges-rotting-1 1000000   
time node oranges-rotting-2 1000000 ./graph-1
time node oranges-rotting-2 1000000 ./graph-2
time node oranges-rotting-3 1000000 
time node oranges-rotting-4 1000000  
```