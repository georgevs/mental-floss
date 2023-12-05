# 79. Word Search

https://leetcode.com/problems/word-search/  
AR: 40M  
KEYS: array, backtracking, matrix  

Given an m x n grid of characters board and a string word, return true if word exists in the grid.

The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.

Constraints:
- m == board.length
- n = board[i].length
- 1 <= m, n <= 6
- 1 <= word.length <= 15
- board and word consists of only lowercase and uppercase English letters.

### Solution: backtracking
```
exist G(V A) X -> t = for v<-V if !Sv iter {v} v X
  iter S u X -> t =
    if !X ret t
    for u==x0,v<-Au if !Sv,visit S+v v X[1:] ret t
```