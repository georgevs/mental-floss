# 1584. Min Cost to Connect All Points

## References
- https://leetcode.com/problems/min-cost-to-connect-all-points/
- https://leetcode.com/explore/learn/card/graph/621/algorithms-to-construct-minimum-spanning-tree/3860/

## Description

You are given an array points representing integer coordinates of some points on a 2D-plane, where points[i] = [xi, yi].

The cost of connecting two points [xi, yi] and [xj, yj] is the manhattan distance between them: |xi - xj| + |yi - yj|, where |val| denotes the absolute value of val.

Return the minimum cost to make all points connected. All points are connected if there is exactly one simple path between any two points.

Constraints:

- 1 <= points.length <= 1000
- -10^6 <= xi, yi <= 10^6
- All pairs (xi, yi) are distinct.

## Test
```
find . -name 'test*js' | xargs -tL1 node
```
## Performance
```
seq 5 | xargs -L1 time node min-spanning-tree-kruskal 100000
seq 5 | xargs -L1 time node min-spanning-tree-prim 100000
```