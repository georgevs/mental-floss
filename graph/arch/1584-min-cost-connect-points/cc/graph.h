#pragma once

#include <vector>

using namespace std;

using edge_t = vector<int>;

int other(const edge_t& e, int u) { return u == e[0] ? e[1] : e[0]; }

class graph_t {
 public:
  graph_t(size_t n, const vector<edge_t>& xs) : vertices(n) {
    for (auto e : xs) {
      vertices[e[0]].push_back(e);
      vertices[e[1]].push_back(e);
    }
  }
  size_t numVertices() const { return vertices.size(); }
  vector<edge_t> neighbours(int u) const { return vertices[u]; }

 private:
  vector<vector<edge_t>> vertices;
};
