#pragma once

#include <vector>

using namespace std;

namespace remove_element {

class Solution {
public:
  int removeElement(vector<int>& xs, int val) {
    auto i = begin(xs);
    for (auto j = i; j != end(xs); ++j) {
      if (*j != val) {
        swap(*i++, *j);
      }
    }
    return i - begin(xs);
  }
};

} // namespace S2
