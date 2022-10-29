# 743. Network Delay Time

## References

- https://leetcode.com/problems/network-delay-time/
- https://leetcode.com/explore/learn/card/graph/622/single-source-shortest-path-algorithm/3863/

## Description

You are given a network of n nodes, labeled from 1 to n. You are also given times, a list of travel times as directed edges times[i] = (ui, vi, wi), where ui is the source node, vi is the target node, and wi is the time it takes for a signal to travel from source to target.

We will send a signal from a given node k. Return the minimum time it takes for all the n nodes to receive the signal. If it is impossible for all the n nodes to receive the signal, return -1.

Constraints:
- 1 <= k <= n <= 100
- 1 <= times.length <= 6000
- times[i].length == 3
- 1 <= ui, vi <= n
- ui != vi
- 0 <= wi <= 100
- All the pairs (ui, vi) are unique. (i.e., no multiple edges.)

## Test
```
find . -name 'test*js' | xargs -tL1 node
```

## Performance
```
seq 5 | xargs -L1 time node ./shortest-paths-bellman-ford 100000
seq 5 | xargs -L1 time node ./shortest-paths-bellman-ford-spfa 100000
seq 5 | xargs -L1 time node ./shortest-paths-dijkstra-lazy 100000
seq 5 | xargs -L1 time node ./shortest-paths-dijkstra-eager ./indexed-heap 100000
seq 5 | xargs -L1 time node ./shortest-paths-dijkstra-eager ./indexed-heap-oop 100000
seq 5 | xargs -L1 time node ./shortest-paths 100000
```
