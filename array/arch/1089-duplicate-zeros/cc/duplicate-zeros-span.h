#include <span>
#include <vector>

using namespace std;

namespace duplicate_zeros_span {

class Solution {
 public:
  void duplicateZeros(vector<int>& xs) {
    auto i = begin(xs);
    for (auto j = i; j < end(xs); ++i, ++j) {
      if (*i == 0) ++j;
    }
    auto ys = span{begin(xs), i};
    auto j = rbegin(xs);
    for (auto i = ys.rbegin(); i != ys.rend(); ++i, ++j) {
      *j = *i;
      if (*i == 0) *++j = 0;
    }
  }
};

}  // namespace duplicate_zeros_span
