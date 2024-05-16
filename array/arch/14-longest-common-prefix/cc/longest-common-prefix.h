
#include <vector>
#include <string>

using namespace std;

class Solution {
public:
  string longestCommonPrefix(const vector<string>& strs) {
    if (strs.empty()) { return ""; }

    for (size_t k = 0; k < strs[0].length(); ++k) {
      auto const ch = strs[0][k];
      for (size_t i = 1; i < strs.size(); ++i) {
        if (strs[i][k] != ch) {
          return strs[0].substr(0, k);
        }
      }
    }
    return strs[0];
  }
};
