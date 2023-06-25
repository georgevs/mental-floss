#pragma once

#include <cmath>
#include <numeric>
#include <queue>
#include <set>
#include <vector>

#include "disjoint_set.h"
#include "graph.h"
#include "min_cost_connect_points.h"

using namespace std;

vector<edge_t> kruskal(size_t n, vector<edge_t>&& xs) {
  sort(xs.begin(), xs.end(),
       [](const edge_t& lhs, const edge_t& rhs) { return lhs[2] < rhs[2]; });

  vector<edge_t> txs{};
  disjoint_set ds{n};
  for (int i = 0; i < xs.size() && txs.size() < n - 1; ++i) {
    const edge_t& e = xs[i];
    if (ds.connect(e[0], e[1])) {
      txs.push_back(e);
    }
  }
  return txs;
}

class SolutionKruskal {
 public:
  int minCostConnectPoints(vector<point_t> pts) {
    int n = pts.size();
    vector<edge_t> xs = edges(pts);
    vector<edge_t> txs = kruskal(n, move(xs));
    return accumulate(txs.begin(), txs.end(), 0,
                      [](int acc, const edge_t& e) { return acc + e[2]; });
  }
};
