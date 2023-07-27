# 133. Clone Graph

https://leetcode.com/problems/clone-graph/description/  
AR: M54
KEYS: graph, hash table, bfs/dfs

Given a reference of a node in a connected undirected graph.

Return a deep copy (clone) of the graph.

Constraints:

- The number of nodes in the graph is in the range [0, 100].
- 1 <= Node.val <= 100
- Node.val is unique for each node.
- There are no repeated edges and no self-loops in the graph.
- The Graph is connected and all nodes can be visited starting from the given node.

### Approach 1: Depth First Search

### Approach 2: Breadth First Search
```
clone-graph: u -> y
  bfs: u
    Q<-u, S<-u
    for |Q| 
      for u<-Q: y=copy(u), for v<-u.N: y.N<-copy(v), if !Sv: Q'<-v, S<-v
      Q~Q'

  copy: u -> y
    y=Du; y=Du=new
```
