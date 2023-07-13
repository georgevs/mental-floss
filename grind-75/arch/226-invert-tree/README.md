# 226. Invert Binary Tree

https://leetcode.com/problems/invert-binary-tree/description/  
AR: E75  
KEY: tree, binary tree, DFS, BFS  

Given the root of a binary tree, invert the tree, and return its root.

Constraints:
- The number of nodes in the tree is in the range [0, 100].
- -100 <= Node.val <= 100


Approach 1: Recursive
```
invert: x -> x =
  if !x ret
  x.l ~ x.r
  invert x.l
  invert x.r
```

Approach 2: Iterative
```
invert :x -> x = 
  for Q<-x, |Q|  Q=iter Q   
iter: Q -> Q' =
  for x<-Q  if x  x.l~x.r  Q'<-{ x.l x.r }
```