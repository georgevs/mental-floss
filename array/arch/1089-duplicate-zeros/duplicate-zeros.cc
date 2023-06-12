/*
clang++ -std=c++20 duplicate-zeros.cc -o __a.out && ./__a.out
*/

#include <algorithm>
#include <vector>

using namespace std;

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

int main() {
  vector<int> xs{1, 0, 2, 3, 0, 4, 5, 0};
  Solution{}.duplicateZeros(xs);
  assert(vector<int>({1, 0, 0, 2, 3, 0, 0, 4}) == xs);
}
