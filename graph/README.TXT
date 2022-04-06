https://leetcode.com/explore/learn/card/graph/

Types of graphs
- undirected
- directed
- weighted

Terminology
- vertex
- edge
- path: sequence of vertices
- path length: numberof EDGES in the path
- cycle: path statring and ending point are the same vertex
- negative weight cycle
- connectivity: a path exists between two vertices
- (unweighted graph) degree of vertext - number of edges connecting the vertex
- (directed graph) in-degree: number of edges incident TO the vertex
- (directed graph) out-degree: number of edges incident FROM the vertex

`Adjacency list` is where we have a list of sub-lists, 
  where each sub-list is the list of the immediate neighbours for the i'th node.

`Adjacency matrix` ...

`linked representation` ...

A `complete graph` is a graph where every vertex is connected to every other vertex.


`Disjoint set`
- parent node: DIRECT parent of a vertex
- root node: node WITHOUT a parent (..or parent of itself)

Given:
- vertices: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
- edges: (0,1) (0,2) (1,3) (4,8) (5,6) (5,7)

disjoint sets array:  [0,0,0,1,4,5,5,5,4,9]   .. vertex -> parent

check if connected: 
- (0,3) are connected because both 0 and 3 are in the same set (..have the same root 0) 
- (1,5) are NOT connected because 1 and 5 are NOT in the same set (1 has root 0, and 5 has root 5)
- (1,8) are NOT connected because 1 and 8 are NOT in the same set (1 has root 0, and 8 has root 8)

disjoint set functions:
- find: finds the root node of a given node
- union: connects two nodes by placing them in the same disjoint set, and updates the array

Quick find: vertex -> root parent 
  find: vertex parent
  connect: new root will be assigned to ALL vertices with the old root

Quick connect: vertex -> root or parent 
  connect: new root is assigned to the joining element only
  find: traverse all parents to find the root

Quick connect rank: vertex -> root or parent;  vertex -> rank (tree height if vertex is root)
  find: traverse all parents to find the root
  connect: between the two vertice choose the one with longer height as new root
           if equal in rank, chose one vertex for root, and increment the other's rank



A graph, G, is a `tree` iff:
- G is fully connected. In other words, for every pair of nodes in G, there is a path between them.
- G contains no cycles. In other words, there is exactly one path between each pair of nodes in G.

`Depth-first search` is a classic graph-traversal algorithm 
that can be used to check for both of these conditions:
- G is fully connected if, and only if, we started a depth-first search from a single source
   and discovered all nodes in G during it.
- G contains no cycles if, and only if, the depth-first search never goes back to an already discovered node. 
  We need to be careful though not to count trivial cycles of the form A → B → A 
  that occur with most implementations of undirected edges.

---

In Graph theory, the `depth-first search` algorithm (abbreviated as DFS) is mainly used to:

Traverse all vertices in a “graph”;
Traverse all paths between any two vertices in a “graph”.