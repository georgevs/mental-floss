#pragma once

#include <vector>
#include <iterator>
#include <span>

namespace spiral_order {

using namespace std;


class Solution {
public:
  vector<int> spiralOrder(vector<vector<int>> xss) { 
    auto m = xss.size(), n = xss[0].size();
    vector<int> zs(m * n);
    int* z = zs.data();
    spiralOrder(xss, 0, 0, n, m, z);
    return zs;
  }
  void spiralOrder(const vector<vector<int>>& xss, int l, int t, int w, int h, int*& z) {
    if (w >= 1) {
      for (auto x=l, y=t; x < l+w; ++x) { *z++ = xss[y][x]; }
      if (h>=2) {
        for (auto x=l+w-1, y=t+1; y < t+h; ++y) { *z++ = xss[y][x]; }
        if (w>=2) {
          for (auto x=l+w-1, y=t+h-1; x-- > l; ) { *z++ = xss[y][x]; }
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
