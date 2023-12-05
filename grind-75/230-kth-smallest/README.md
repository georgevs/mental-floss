# 230. Kth Smallest Element in a BST
https://leetcode.com/problems/kth-smallest-element-in-a-bst  
AR: 71M  
KEYS: binary tree, depth first search, binary search tree  

Given the root of a binary search tree, and an integer k, return the kth smallest value (1-indexed) of all the values of the nodes in the tree.

Constraints:

- The number of nodes in the tree is n.
- 1 <= k <= n <= 10^4
- 0 <= Node.val <= 10^4

### Approach
In-order traversal yields the numbers sorted. Traverse till kth.

### Solution (recursive)
```
kth p k -> r = iter 0 p
iter i p -> i r =
  if pl , i,r=iter i pl , i==k  ret
  if      i,r=i+1,pv    , i==k  ret
  if pr , i,r=iter i pr , i==k  ret
```
