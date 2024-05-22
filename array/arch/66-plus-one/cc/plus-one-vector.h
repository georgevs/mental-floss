#pragma once

#include <vector>
#include <algorithm>

namespace plus_one_vector {

using namespace std;

class Solution {
public:
  vector<int> plusOne(vector<int> xs) {
    vector<int> ys;
    ys.reserve(xs.size() + 1);
    int c = 1;
    for (auto i = rbegin(xs); i != rend(xs); ++i) {
      auto z = c + *i;
      c = z / 10;
      ys.push_back(z % 10);
    }
    if (c) { ys.push_back(c); }
    ranges::reverse(ys);
    return ys;
  }
};

}  // namespace