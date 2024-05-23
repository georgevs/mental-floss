#pragma once

#include <string>
#include <stack>
#include <sstream>

namespace reverse_words_stack {

using namespace std;

class Solution {
 public:
  string reverseWords(string s) {
    char* f = s.data();
    char* l = f + s.length();

    while (f != l && *f == ' ') { ++f; }

    stack<pair<char*, char*>> xs;
    while (f != l) {
        char* b = f;
        while (f != l && *f != ' ') { ++f; }
        char* e = f;
        xs.push(pair{ b, e });
        while (f != l && *f == ' ') { ++f; }
    }

    ostringstream oss;
    auto w = xs.top(); xs.pop();
    oss << string(w.first, w.second);
    while (!xs.empty()) {
        auto w = xs.top(); xs.pop();
        oss << ' ' << string(w.first, w.second);
    }

    return oss.str();
  }
};

}  // namespace reverse_words_stack
