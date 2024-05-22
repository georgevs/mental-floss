#pragma once

#include <numeric>
#include <vector>

using namespace std;

namespace replace_elements_stl {

class Solution {
 public:
  vector<int> replaceElements(vector<int> xs) {
    exclusive_scan(rbegin(xs), rend(xs), rbegin(xs), -1,
                   [](auto i, auto j) { return max(i, j); });
    return xs;
  }
};

}  // namespace replace_elements_stl
