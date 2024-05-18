/* 
  g++ -std=c++20 -lgtest test.cc && ./a.out
*/

#if !defined(S1) && !defined(S2)
#define SALL
#endif

#include "longest-common-prefix.h"
#include "longest-common-prefix-stl.h"

#include <gtest/gtest.h>

using namespace std;
using namespace testing;

class SolutionTest : public Test {
public:
  template<typename Solution>
  void test_basic() {
    ASSERT_EQ("fl", Solution().longestCommonPrefix(std::vector<string>{"flower", "flow", "flight"}));
    ASSERT_EQ("", Solution().longestCommonPrefix(std::vector<string>{"dog","racecar","car"}));
  }
};

#if defined(S1) || defined(SALL)
TEST_F(SolutionTest, test_basic) {
  test_basic<longest_common_prefix::Solution>();
}
#endif

#if defined(S2) || defined(SALL)
TEST_F(SolutionTest, test_basic_stl) {
  test_basic<longest_common_prefix_stl::Solution>();
}
#endif

int main(int argc, char** argv) {
  InitGoogleTest(&argc, argv);
  return RUN_ALL_TESTS();
}