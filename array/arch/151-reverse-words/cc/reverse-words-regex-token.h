#pragma once

#include <algorithm>
#include <numeric>
#include <regex>
#include <string>

namespace reverse_words_regex_token {

using namespace std;

class Solution {
 public:
  string reverseWords(string s) {
    const auto re = regex("\\s+");
    auto m = sregex_token_iterator(begin(s), end(s), re, -1);
    const auto ml = sregex_token_iterator();

    vector<string> xs;
    copy(m, ml, back_inserter(xs));
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

}  // namespace reverse_words_regex_token
