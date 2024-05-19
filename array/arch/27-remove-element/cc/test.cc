/* 
  g++ -std=c++20 -lgtest test.cc && ./a.out
*/

#include "remove-element.h"
#include "remove-element-stl.h"

#include <gtest/gtest.h>

using namespace std;
using namespace testing;

class SolutionTest : public Test {
public:
  template<typename Solution>
  void test_basic() {
    auto removeElement = [](vector<int> xs, int num) {
      return vector<int>{begin(xs), begin(xs) + Solution().removeElement(xs, num)};
    };
    ASSERT_EQ((vector<int>{2,2}), removeElement({3,2,2,3}, 3));
    ASSERT_EQ((vector<int>{0,1,3,0,4}), removeElement({0,1,2,2,3,0,4,2}, 2));
  }
};

TEST_F(SolutionTest, test_basic) {
  test_basic<remove_element::Solution>();
}

TEST_F(SolutionTest, test_basic_stl) {
  test_basic<remove_element_stl::Solution>();
}

int main(int argc, char** argv) {
  InitGoogleTest(&argc, argv);
  return RUN_ALL_TESTS();
}
