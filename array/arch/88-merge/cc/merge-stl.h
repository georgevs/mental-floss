#pragma once

#include <vector>

namespace merge_stl {

using namespace std;

class Solution {
 public:
  void merge(vector<int>& xs, int m, vector<int>& ys, int n) {
    for (int i = m - 1, j = n - 1, k = xs.size(); k-- > 0;) {
      if (j < 0) {
        break;
      }
      if (i < 0 || xs[i] < ys[j]) {
        xs[k] = ys[j--];
      } else {
        xs[k] = xs[i--];
      }
    }
  }
};

} // namespace merge
