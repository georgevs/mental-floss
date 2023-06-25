#pragma once

#include <cmath>
#include <numeric>
#include <queue>
#include <set>
#include <vector>

#include "graph.h"
#include "min_cost_connect_points.h"

using namespace std;

vector<edge_t> prim_lazy(const graph_t& g) {
  vector<edge_t> txs;

  size_t n = g.numVertices();
  set<int> vs;

  auto prim = [&](int u) {
    auto orderByWeight = [](const edge_t& lhs, const edge_t& rhs) {
      return lhs[2] > rhs[2];
    };
    priority_queue<edge_t, vector<edge_t>, decltype(orderByWeight)> pq{orderByWeight};

    vs.insert(u);
    while (u < n && txs.size() < n - 1) {
      for (const edge_t& e : g.neighbours(u)) {
        int v = other(e, u);
        if (!vs.count(v)) {
          pq.push(edge_t{u, v, e[2]});
        }
      }
      u = n;  // invalid
      while (u == n && pq.size() > 0) {
        edge_t e = pq.top();
        pq.pop();
        if (!vs.count(e[1])) {
          txs.push_back(e);
          u = e[1];
          vs.insert(u);
        }
      }
    }
  };

  for (int u = 0; u < n; ++u) {
    if (!vs.count(u)) {
      prim(u);
    }
  }
  return txs;
}

class SolutionPrim {
 public:
  int minCostConnectPoints(vector<point_t> pts) {
    size_t n = pts.size();
    vector<edge_t> xs = edges(pts);
    vector<edge_t> txs = prim_lazy(graph_t{n, xs});
    return accumulate(txs.begin(), txs.end(), 0,
                      [](int acc, const edge_t& e) { return acc + e[2]; });
  }
};
