/*
clang++ -std=c++20 merge.cc -o __a.out && ./__a.out
*/

#include <vector>

using namespace std;

class Solution {
 public:
  void merge(vector<int>& xs, int m, vector<int>& ys, int n) {
    for (int i = m - 1, j = n - 1, k = xs.size(); k-- > 0;) {
      if (j < 0) { break; }
      if (i < 0 || xs[i] < ys[j]) { xs[k] = ys[j--]; }
      else { xs[k] = xs[i--]; }
    }
  }
};

int main() {
  vector xs {1, 2, 3, 0, 0, 0};
  vector ys {2, 5, 6};
  Solution{}.merge(xs, 3, ys, 3);
  assert(vector({1, 2, 2, 3, 5, 6}) == xs);
}
