#pragma once

#include <vector>
#include <iterator>
#include <span>

namespace spiral_order_span {

using namespace std;


class Solution {
public:
  vector<int> spiralOrder(vector<vector<int>> xss) { 
    auto m = xss.size(), n = xss[0].size();
    vector<int> zs; zs.reserve(m * n);
    spiralOrder(xss, 0, 0, n, m, back_inserter(zs));
    return zs;
  }
  template<typename I>
  void spiralOrder(const vector<vector<int>>& xss, int l, int t, int w, int h, I z) {
    if (w >= 1) {
      auto s = span{xss[t]}.subspan(l, w);
      copy(begin(s), end(s), z);
      if (h>=2) {
        for (auto x=l+w-1, y=t+1; y < t+h; ++y) { *z++ = xss[y][x]; }
        if (w>=2) {
          auto s = span{xss[t+h-1]}.subspan(l, w-1);
          copy(rbegin(s), rend(s), z);
          if (h>=3) {
            for (auto x=l, y=t+h-1; y-- > t+1; ) { *z++ = xss[y][x]; }
            spiralOrder(xss, l+1, t+1, w-2, h-2, z);
          }
        }
      }
    }
  }
};


} // namespace
