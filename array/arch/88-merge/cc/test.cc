/*
  g++ -std=c++20 test.cc -lgtest && ./a.out
*/

#include "merge-stl.h"
#include "merge-span.h"

#include <gtest/gtest.h>

using namespace std;
using namespace testing;

class SolutionTest : public Test {
public:
  template<typename Solution>
  void test_basic() {
    auto merge = [](vector<int> xs, int m, vector<int> ys, int n) {
      Solution{}.merge(xs, m, ys, n);
      return xs;
    };
    ASSERT_EQ((vector{1, 2, 2, 3, 5, 6}),
         merge(vector{1, 2, 3, 0, 0, 0}, 3, vector{2, 5, 6}, 3));
  }
};

TEST_F(SolutionTest, basic_test_stl) {
  test_basic<merge_stl::Solution>();
}

TEST_F(SolutionTest, basic_test_span) {
  test_basic<merge_span::Solution>();
}

int main(int argc, char** argv) {
  InitGoogleTest(&argc, argv);
  return RUN_ALL_TESTS();
}
