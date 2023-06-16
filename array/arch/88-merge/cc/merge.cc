/*
clang++ -std=c++20 cc/merge.cc -o ./__merge && ./__merge ; rm ./__merge
g++ -std=c++20 cc/merge.cc -o ./__merge && ./__merge ; rm ./__merge
*/

#include <cassert>
#include <vector>

using namespace std;

class Solution {
 public:
  void merge(vector<int>& xs, int m, vector<int>& ys, int n) {
    for (int i = m - 1, j = n - 1, k = xs.size(); k-- > 0;) {
      if (j < 0) {
        break;
      }
      if (i < 0 || xs[i] < ys[j]) {
        xs[k] = ys[j--];
      } else {
        xs[k] = xs[i--];
      }
    }
  }
};

int main() {
  auto merge_ = [](auto xs, int m, auto ys, int n) -> auto {
    Solution{}.merge(xs, m, ys, n);
    return xs;
  };

  assert(vector({1, 2, 2, 3, 5, 6}) ==
         merge_(vector{1, 2, 3, 0, 0, 0}, 3, vector{2, 5, 6}, 3));
}
