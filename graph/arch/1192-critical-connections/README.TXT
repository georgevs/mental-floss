https://leetcode.com/problems/critical-connections-in-a-network/

Keywords: bridges

There are n servers numbered from 0 to n - 1 connected by undirected server-to-server connections 
forming a network where connections[i] = [ai, bi] represents a connection between servers ai and bi. 
Any server can reach other servers directly or indirectly through the network.

A critical connection is a connection that, if removed, 
will make some servers unable to reach some other server.

Return all critical connections in the network in any order.


seq 5 | xargs -L1 -I% time node critical-connections-1 10
        1.79 real         2.16 user         0.23 sys
        1.81 real         2.19 user         0.25 sys
        1.82 real         2.18 user         0.24 sys
        1.81 real         2.17 user         0.24 sys
        1.81 real         2.16 user         0.24 sys

seq 5 | xargs -L1 -I% time node critical-connections-2 10
        1.36 real         1.70 user         0.20 sys
        1.34 real         1.66 user         0.19 sys
        1.34 real         1.66 user         0.19 sys
        1.34 real         1.68 user         0.19 sys
        1.34 real         1.66 user         0.19 sys
        
seq 5 | xargs -L1 -I% time node critical-connections-3 10
        1.45 real         1.80 user         0.19 sys
        1.45 real         1.82 user         0.20 sys
        1.43 real         1.79 user         0.20 sys
        1.43 real         1.80 user         0.20 sys
        1.45 real         1.82 user         0.20 sys
