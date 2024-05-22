#pragma once

#include <vector>
#include <deque>

namespace plus_one_deque {

using namespace std;

class Solution {
public:
  vector<int> plusOne(vector<int> xs) {
    deque<int> ys;

    int c = 1;
    for (auto i = rbegin(xs); i != rend(xs); ++i) {
      auto z = c + *i;
      c = z / 10;
      ys.push_front(z % 10);
    }
    if (c) { ys.push_front(c); }

    return vector<int>{begin(ys),end(ys)};
  }
};

}  // namespace