/*
  g++ -std=c++20 -lgtest test.cc && ./a.out
*/

#include "replace-elements.h"
#include "replace-elements-stl.h"

#include <gtest/gtest.h>

using namespace std;
using namespace testing;

class SolutionTest: public Test {
public:
  template<typename Solution>
  void test_basic() {
    ASSERT_EQ((vector<int>{18, 6, 6, 6, 1, -1}),
              Solution().replaceElements({17, 18, 5, 4, 6, 1}));
    ASSERT_EQ((vector<int>{-1}),
              Solution().replaceElements({400}));
  }
};

TEST_F(SolutionTest, test_basic) { 
  test_basic<replace_elements::Solution>();
}

TEST_F(SolutionTest, test_basic_stl) { 
  test_basic<replace_elements_stl::Solution>();
}

int main(int argc, char** argv) {
  InitGoogleTest(&argc, argv);
  return RUN_ALL_TESTS();
}
