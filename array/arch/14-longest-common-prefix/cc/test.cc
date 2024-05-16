#include "longest-common-prefix.h"

#include <gtest/gtest.h>

using namespace std;
using namespace testing;

TEST(Solution, test_basic) {
  ASSERT_EQ("fl", Solution().longestCommonPrefix({"flower", "flow", "flight"}));
  ASSERT_EQ("", Solution().longestCommonPrefix({"dog","racecar","car"}));
}

int main(int argc, char** argv) {
  InitGoogleTest(&argc, argv);
  return RUN_ALL_TESTS();
}