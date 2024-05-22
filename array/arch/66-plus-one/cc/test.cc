/*
  g++ -std=c++20 -lgtest test.cc && ./a.out
*/

#include "plus-one-vector.h"
#include "plus-one-deque.h"

#include <gtest/gtest.h>

using namespace std;
using namespace testing;

class SolutionTest : public Test {
public:
  template<typename Solution>
  void test_basic() {
    ASSERT_EQ((vector{1, 2, 4}), Solution().plusOne({1, 2, 3}));
    ASSERT_EQ((vector{1, 0}), Solution().plusOne({9}));
  }
};

TEST_F(SolutionTest, basic_test_vector) {
  test_basic<plus_one_vector::Solution>();
}

TEST_F(SolutionTest, basic_test_deque) {
  test_basic<plus_one_deque::Solution>();
}

int main(int argc, char** argv) {
  InitGoogleTest(&argc, argv);
  return RUN_ALL_TESTS();
}
