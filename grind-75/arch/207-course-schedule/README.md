# 207. Course Schedule

https://leetcode.com/problems/course-schedule/description/  

AR: M46  
KEYS: DFS, BFS, graph, topological sort  

There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.

For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
Return true if you can finish all courses. Otherwise, return false.

Constraints:

- 1 <= numCourses <= 2000
- 0 <= prerequisites.length <= 5000
- prerequisites[i].length == 2
- 0 <= ai, bi < numCourses
- All the pairs prerequisites[i] are unique.

## Approach 1: Topological Sort Using Kahn's Algorithm

```
kahn: g(V,E,E') -> t =
  D={v->|E'|, v<-V}
  for Q=[v<-V, Dv==0], |Q|>0
    for v<-Q: ~Dv, for u<-E'v  Du-=1
  t = |D| == 0
```

## Approach 2: Depth First Search
```
dfs: n X -> t =
  g=G n X
  for u<-g.V if !visit u ret F

  visit: u -> t =
    if Cu=G ret F
    if Cu=W ret T
    Cu=G
    for v<-g.Eu if !visit v ret F
    Cu=W
```
