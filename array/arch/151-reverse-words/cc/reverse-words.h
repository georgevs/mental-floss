#pragma once

#include <string>

namespace reverse_words {

using namespace std;

class Solution {
 public:
  string reverseWords(string s) {
    char* f = s.data();
    char* l = f + s.length();
    char* r = f;

    while (f != l && *f == ' ') { ++f; }

    while (f != l) {
      char* b = f;
      while (f != l && *f != ' ') { ++f; }
      char* e = f;
      while (f != l && *f == ' ') { ++f; }
      for (char *i = b, *j = e; i < --j; ++i) { swap(*i, *j); }
      while (b < e) { *r++ = *b++; }
      if (f != l) { *r++ = ' '; }
    }

    for (char *i = s.data(), *j = r; i < --j; ++i) { swap(*i, *j); }
    return string(s.data(), r);
  }
};

}  // namespace reverse_words
