#pragma once

#include <vector>
#include <span>

namespace merge_span {

using namespace std;

class Solution {
 public:
  void merge(vector<int>& rs, int m, vector<int>& ys, int n) {
    auto xs = span{rs}.subspan(0, m);
    auto x = rbegin(xs), xl = rend(xs);
    auto y = rbegin(ys), yl = rend(ys);
    for (auto r = rbegin(rs); r != rend(rs); ++r) {
      if (x != xl && y != yl) {
        *r = *x < *y ? *y++ : *x++;
        
      } else if (y != yl) {
        copy(y, yl, r);
        break;
        
      } else {
        break;  // rest of rs is ordered
      }
    }
  }
};

}  // namespace merge_span
