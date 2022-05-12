https://leetcode.com/problems/optimize-water-distribution-in-a-village/
https://leetcode.com/explore/learn/card/graph/618/disjoint-set/3916/

There are n houses in a village. 
We want to supply water for all the houses by building wells and laying pipes.

For each house `i`, we can either build a well inside it directly with cost wells[i - 1], 
or pipe in water from another well to it. 
The costs to lay pipes between houses are given by the array pipes 
where each pipes[j] = [house1j, house2j, costj] represents the cost to connect 
`house1j` and `house2j` together using a pipe. 
Connections are bidirectional, and there could be multiple valid connections 
between the same two houses with different costs.

Return the minimum total cost to supply water to all houses.
