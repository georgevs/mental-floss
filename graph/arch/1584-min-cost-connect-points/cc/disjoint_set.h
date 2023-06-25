#pragma once

#include <algorithm>
#include <numeric>
#include <ostream>
#include <vector>

#include "util.h"

using namespace std;

class disjoint_set {
  friend std::ostream& operator<<(std::ostream& os, const disjoint_set& ds);

 public:
  disjoint_set(size_t n) : root(n), rank(n, 1) {
    iota(root.begin(), root.end(), 0);
  }
  int find(int i) {
    while (i != root[i]) {
      i = root[i];
    }
    return i;
  }
  bool connect(int i, int j) {
    int ri = find(i), rj = find(j);
    if (ri == rj) {
      return false;
    }
    if (rank[ri] < rank[rj]) {
      root[ri] = rj;
    } else if (rank[rj] < rank[ri]) {
      root[rj] = ri;
    } else {
      root[ri] = rj;
      ++rank[rj];
    }
    return true;
  }

 private:
  vector<int> root;
  vector<int> rank;
};

std::ostream& operator<<(std::ostream& os, const disjoint_set& ds) {
  os << "disjoint_set{" << ds.root << ", " << ds.rank << "}";
  return os;
}
