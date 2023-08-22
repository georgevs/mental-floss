# 994. Rotting oranges

https://leetcode.com/problems/rotting-oranges/description/  
AR: M53  
KEYS: grid, bfs  

You are given an m x n grid where each cell can have one of three values:

0 representing an empty cell,
1 representing a fresh orange, or
2 representing a rotten orange.
Every minute, any fresh orange that is 4-directionally adjacent to a rotten orange becomes rotten.

Return the minimum number of minutes that must elapse until no cell has a fresh orange. If this is impossible, return -1.

### Approach 1: bfs
```
rotting_oranges X -> k
  Q={x,x==2}  n=|x,x==1|
  for Q,S  for xi<-Q  for xj<-xi[l,t,r,b]  if xj==1 xj=2,Q'<-xj,n--
           Q~Q', k++
  if S k=-1 
```
