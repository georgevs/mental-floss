# 310. Minimum Height Trees

## References

- https://leetcode.com/explore/learn/card/graph/623/kahns-algorithm-for-topological-sorting/3953/
- https://leetcode.com/problems/minimum-height-trees/

## Description

A tree is an undirected graph in which any two vertices are connected by exactly one path. In other words, any connected graph without simple cycles is a tree.

Given a tree of n nodes labelled from 0 to n - 1, and an array of n - 1 edges where edges[i] = [ai, bi] indicates that there is an undirected edge between the two nodes ai and bi in the tree, you can choose any node of the tree as the root. When you select a node x as the root, the result tree has height h. Among all possible rooted trees, those with minimum height (i.e. min(h))  are called minimum height trees (MHTs).

Return a list of all MHTs' root labels. You can return the answer in any order.

The height of a rooted tree is the number of edges on the longest downward path between the root and a leaf.

Constraints:

- 1 <= n <= 2 * 10^4
- edges.length == n - 1
- 0 <= ai, bi < n
- ai != bi
- All the pairs (ai, bi) are distinct.
- The given input is guaranteed to be a tree and there will be no repeated edges.

## Test
```
node test
```

## Performance
```
seq 5 | xargs -L1 time node find-min-height-trees-1 1
seq 5 | xargs -L1 time node find-min-height-trees-3 1
seq 5 | xargs -L1 time node find-min-height-trees-4a 1
seq 5 | xargs -L1 time node find-min-height-trees-4b 1
seq 5 | xargs -L1 time node find-min-height-trees-5 100
seq 5 | xargs -L1 time node find-min-height-trees-6a 1000
seq 5 | xargs -L1 time node find-min-height-trees-6b 1000
```