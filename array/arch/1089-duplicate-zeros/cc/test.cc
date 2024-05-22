/*
  g++ -std=c++20 -lgtest test.cc && ./a.out
*/

#include "duplicate-zeros-span.h"
#include "duplicate-zeros-stl.h"
#include "duplicate-zeros.h"

#include <gtest/gtest.h>

using namespace std;
using namespace testing;

class SolutionTest: public Test {
public:
  template<typename Solution>
  void test_basic() {
    auto duplicateZeros = [](vector<int> xs) {
      Solution().duplicateZeros(xs);
      return xs;
    };
    ASSERT_EQ((vector<int>{1, 0, 0, 2, 3, 0, 0, 4}), duplicateZeros({1, 0, 2, 3, 0, 4, 5, 0}));
    ASSERT_EQ((vector<int>{1,2,3}), duplicateZeros({1,2,3}));
    ASSERT_EQ((vector<int>{0}), duplicateZeros({0}));
  }
};

TEST_F(SolutionTest, test_basic) {
  test_basic<duplicate_zeros::Solution>();
}

TEST_F(SolutionTest, test_basic_stl) {
  test_basic<duplicate_zeros_stl::Solution>();
}

TEST_F(SolutionTest, test_basic_span) {
  test_basic<duplicate_zeros_span::Solution>();
}

int main(int argc, char**argv) {
  InitGoogleTest(&argc, argv);
  return RUN_ALL_TESTS();
}
