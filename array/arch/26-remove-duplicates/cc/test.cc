/*
  export CPLUS_INCLUDE_PATH=/opt/homebrew/include
  export LIBRARY_PATH=/opt/homebrew/lib
  g++ -std=c++20 -lgtest test.cc && ./a.out
*/

#include <vector>

using namespace std;

class Solution {
public:
  int removeDuplicates(vector<int>& xs) {
    return distance(begin(xs), unique(begin(xs), end(xs)));
  }
};

#include <gtest/gtest.h>

using namespace std;
using namespace testing;

TEST(Solution, test_basic) {
  auto removeDuplicates = [](vector<int>&& xs) {
    auto k = Solution().removeDuplicates(xs);
    xs.erase(begin(xs) + k, end(xs));
    return xs;
  };
  ASSERT_EQ((vector<int>{1,2}), removeDuplicates(vector<int>{1,1,2}));
  ASSERT_EQ((vector<int>{0,1,2,3,4}), removeDuplicates(vector<int>{0,0,1,1,1,2,2,3,3,4}));
}

int main(int argc, char** argv) {
  InitGoogleTest(&argc, argv);
  return RUN_ALL_TESTS();
}