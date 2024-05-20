#pragma once

#include <string>

using namespace std;

namespace str_str_stl {

class Solution {
public:
  int strStr(string s, string u) {
    auto i = search(s.begin(), s.end(), u.begin(), u.end());
    return i != s.end() ? i - s.begin() : -1;
  }
};

}