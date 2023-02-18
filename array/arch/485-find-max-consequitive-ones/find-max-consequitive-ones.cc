/*
clang++ -std=c++20 find-max-consequitive-ones.cc -o __a.out && ./__a.out
*/

#include <algorithm>
#include <vector>

using namespace std;

class Solution {
 public:
  int findMaxConsecutiveOnes(const vector<int>& xs) {
    int r = 0, k = 0;
    for (auto x : xs) {
      r = max(r, k + x);
      k = (k + x) * x;
    }
    return r;
  }
};

int main() {
  assert(3 == Solution{}.findMaxConsecutiveOnes({1, 1, 0, 1, 1, 1}));
}
