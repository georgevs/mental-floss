#pragma once

#include <string>
#include <iostream>

using namespace std;

namespace str_str_rabin_karp {

class Solution {
public:
  int strStr(string s, string u) {
    if (s.length() < u.length()) {
      return -1;
    }
    auto n = s.length(), k = u.length();
    auto sf = s.begin(), uf = u.begin();

    constexpr unsigned int p = numeric_limits<int>::max();  // big prime number
    constexpr unsigned int b = 'z' - 'a' + 1;               // count char a-z

    unsigned int uh = 0;
    for (auto f = uf, l = f + k; f != l; ++f) {
      uh = uh ^ *f;
    }
    
    unsigned int sh = 0;
    for (auto f = sf, l = f + k; f != l; ++f) {
      sh = sh ^ *f;
    }

    auto f = sf, l = f + n - k + 1;
    if (sh == uh && equal(f, f + k, uf)) {
      return distance(sf, f);
    }
    for (++f; f != l; ++f) {
      sh = (sh ^ *(f-1)) ^ *(f+k-1);
      if (sh == uh && equal(f, f + k, uf)) {
        return distance(sf, f);
      }
    }
    return -1;
  }
};

}