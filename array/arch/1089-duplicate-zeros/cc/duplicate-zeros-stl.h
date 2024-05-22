#include <algorithm>
#include <vector>

using namespace std;

namespace duplicate_zeros_stl {

class Solution {
 public:
  void duplicateZeros(vector<int>& xs) {
    auto f = begin(xs), i = f, j = i, l = end(xs);
    for (; j < l; ++i, ++j) {
      if (*i == 0) ++j;
    }
    while (i-- != f) {
      if (*i == 0 && --j < l) *j = 0;
      *--j = *i;
    }
  }
};

}  // namespace duplicate_zeros
