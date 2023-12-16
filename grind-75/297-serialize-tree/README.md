# 297. Serialize and Deserialize Binary Tree
https://leetcode.com/problems/serialize-and-deserialize-binary-tree/description/  
H56; string, binary tree, bfs, dfs, design

Serialization is the process of converting a data structure or object into a sequence of bits so that it can be stored in a file or memory buffer, or transmitted across a network connection link to be reconstructed later in the same or another computer environment.

Design an algorithm to serialize and deserialize a binary tree. There is no restriction on how your serialization/deserialization algorithm should work. You just need to ensure that a binary tree can be serialized to a string and this string can be deserialized to the original tree structure.

Clarification: The input/output format is the same as how LeetCode serializes a binary tree. You do not necessarily need to follow this format, so please be creative and come up with different approaches yourself.


Constraints:
- The number of nodes in the tree is in the range [0, 10^4].
- -1000 <= Node.val <= 1000

### Solution
Starting from the top and left to right, add each layer nodes values to the result list.
A missing branch in a node will be encoded as `null` at the layer bellow.
```
ENC r -> Y =
  Q<-r t=r
  for x<-Q
    if !x  Q<-nil,nil next
    Y<-xy  Q<-xl,xr  t=xr|xl|t
    if x==t ret

DEC Y -> r =
  y<-Y r={y} Q<-x
  for Y
    x<-Q
    if y<-Y xl={y} Q<-xl
    if y<-Y xr={y} Q<-xr
```
