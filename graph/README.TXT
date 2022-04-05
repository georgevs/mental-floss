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

Disjoint set
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
