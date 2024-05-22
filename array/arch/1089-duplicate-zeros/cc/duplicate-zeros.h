#include <algorithm>
#include <vector>

using namespace std;

namespace duplicate_zeros {

class Solution {
 public:
  void duplicateZeros(vector<int>& xs) {
    const int n = xs.size();
    int i = 0, j = 0;
    for (; j < n; ++i, ++j) {
      if (xs[i] == 0) {
        ++j;
      }
    }
    for (; i-- > 0;) {
      if (--j < n) {
        xs[j] = xs[i];
      }
      if (xs[i] == 0) {
        xs[--j] = 0;
      }
    }
  }
};

} // namespace
