# 200. Number of Islands

https://leetcode.com/problems/number-of-islands/  
AR: M57  
KEYS: array, bfs, dfs, union find, grid  

Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

Constraints:

- m == grid.length
- n == grid[i].length
- 1 <= m, n <= 300
- grid[i][j] is '0' or '1'.

### Approach 1: DFS
```
num_islands Xmn -> k =
  for Xrc if Xrc=='1' k++, dfs r c
  dfs r c =
    Xrc='0', for r,c in [l,t,r,b] if Xrc=='1' dfs r c
```