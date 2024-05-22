#pragma once

#include <vector>

using namespace std;

namespace replace_elements {

class Solution {
 public:
  vector<int> replaceElements(vector<int> xs) {
    auto f = begin(xs), l = end(xs);
    int r = -1;
    while (l-- != f) {
      auto t = r;
      r = max(r, *l);
      *l = t;
    }
    return xs;
  }
};

} // namespace
