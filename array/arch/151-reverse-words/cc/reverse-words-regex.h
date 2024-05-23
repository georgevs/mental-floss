#pragma once

#include <algorithm>
#include <numeric>
#include <regex>
#include <string>

namespace reverse_words_regex {

using namespace std;

class Solution {
 public:
  string reverseWords(string s) {
    const auto re = regex("\\w+");
    auto m = sregex_iterator(begin(s), end(s), re);
    const auto ml = sregex_iterator();

    vector<string> xs;
    transform(m, ml, back_inserter(xs), [](const auto& m) { return m.str(); });
    reverse(begin(xs), end(xs));

    string r;
    if (!xs.empty()) {
      auto x = begin(xs);
      r = accumulate(x + 1, end(xs), *x,
                     [](auto r, auto x) { return r + " " + x; });
    }
    return r;
  }
};

}  // namespace reverse_words_regex
