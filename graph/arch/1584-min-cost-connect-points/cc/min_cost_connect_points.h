#pragma once

#include <cmath>
#include <numeric>
#include <queue>
#include <set>
#include <vector>

#include "graph.h"

using namespace std;

using point_t = vector<int>;

int distance(const point_t& u, const point_t& v) {
  return abs(u[0] - v[0]) + abs(u[1] - v[1]);
}

vector<edge_t> edges(const vector<point_t>& pts) {
  vector<edge_t> xs;
  for (int i = 0; i < pts.size(); ++i) {
    for (int j = i + 1; j < pts.size(); ++j) {
      xs.push_back(edge_t{i, j, distance(pts[i], pts[j])});
    }
  }
  return xs;
}
