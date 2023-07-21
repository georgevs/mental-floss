# 542. 01 Matrix

https://leetcode.com/problems/01-matrix/  
AR: M45  
KEYS: dynamic programming  

Given an m x n binary matrix mat, return the distance of the nearest 0 for each cell.

The distance between two adjacent cells is 1.

Constraints:

- m == mat.length
- n == mat[i].length
- 1 <= m, n <= 104
- 1 <= m * n <= 104
- mat[i][j] is either 0 or 1.
- There is at least one 0 in mat.

Approach 1: Breadth-First Search (BFS):
```
updateMatrix: Umn -> Zmn =
  for yx  if uyx==0  Q<-yx S<-yx
  for |Q|  for yx<-Q  zyx=k  for yx<-[ltrb]  if !Syx Q'<-yx S<-yx
          ,Q~Q'  ++k
```

Approach 2: Dynamic Programming:
```
updateMatrix: Umn -> Zmn =
  for yx  Dyx=1+min(D[y-1]x, Dy[x-1])
  for reversed yx  Dyx=min(Dyx,1+min(D[y+1]x, Dy[x+1]))
```
