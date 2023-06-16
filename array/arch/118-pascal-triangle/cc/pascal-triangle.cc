/**
g++ -std=c++20 cc/pascal-triangle.cc && ./a.out ; rm ./a.out
*/

#include <cassert>
#include <iostream>
#include <iterator>
#include <sstream>
#include <vector>

using namespace std;

class Solution {
 public:
  vector<vector<int>> generate(int k) {
    auto xs = vector<vector<int>>(k);
    if (k == 0) return xs;
    xs[0] = {1};
    if (k == 1) return xs;
    xs[1] = {1, 1};
    if (k == 2) return xs;
    for (int j = 2; j < k; ++j) {
      auto ys = vector<int>(j + 1);
      ys[0] = 1;
      ys[j] = 1;
      for (int i = 1; i < j; ++i) {
        ys[i] = xs[j-1][i-1] + xs[j-1][i];
      }
      xs[j] = move(ys);
    }
    return xs;
  }
};

namespace std {

template <typename T>
ostream& operator<<(ostream& os, const vector<T>& values) {
  ostringstream oss;
  copy(begin(values), end(values), ostream_iterator<T>(oss, ","));
  os << "[" << oss.str() << "]";
  return os;
}

template <typename T>
bool operator==(const vector<T>& lhs, const vector<T>& rhs) {
  if (lhs.size() != rhs.size()) return false;
  for (int i = 0; i < lhs.size(); ++i) {
    if (lhs[i] != rhs[i]) return false;
  }
  return true;
}

}  // namespace std

int main() {
  cout << Solution{}.generate(5);
  // cout << vector<vector<int>>{{1, 2, 3}, {4, 5, 6}};

  assert((vector<vector<int>>{
              {1}, {1, 1}, {1, 2, 1}, {1, 3, 3, 1}, {1, 4, 6, 4, 1}} ==
          Solution{}.generate(5)));
  assert((vector<vector<int>>{{1}} == Solution{}.generate(1)));
}
