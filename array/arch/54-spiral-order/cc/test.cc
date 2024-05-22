/*
  g++ -std=c++20 -lgtest test.cc && ./a.out
*/

#include "spiral-order.h"
#include "spiral-order-span.h"

#include <gtest/gtest.h>

using namespace std;
using namespace testing;

class SolutionTest : public Test {
 public:
  template <typename Solution>
  void test_basic() {
    ASSERT_EQ((vector{1}), Solution().spiralOrder({{1}}));
    ASSERT_EQ((vector{1,2,3}), Solution().spiralOrder({{1,2,3}}));
    ASSERT_EQ((vector{1,2,3}), Solution().spiralOrder({{1},{2},{3}}));
    ASSERT_EQ((vector<int>{1, 2, 3, 6, 9, 8, 7, 4, 5}),
              Solution().spiralOrder(
                  vector<vector<int>>{{1, 2, 3}, {4, 5, 6}, {7, 8, 9}}));
    ASSERT_EQ((vector<int>{1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7}),
              Solution().spiralOrder(vector<vector<int>>{
                  {1, 2, 3, 4}, {5, 6, 7, 8}, {9, 10, 11, 12}}));
  }
};

TEST_F(SolutionTest, test_basic) {
  test_basic<spiral_order::Solution>();
}

TEST_F(SolutionTest, test_basic_span) {
  test_basic<spiral_order_span::Solution>();
}

int main(int argc, char** argv) {
  InitGoogleTest(&argc, argv);
  return RUN_ALL_TESTS();
}
