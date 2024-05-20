/*
  g++ -std=c++20 -lgtest test.cc && ./a.out
*/

#include "str-str-rabin-karp.h"
#include "str-str-stl.h"

#include <gtest/gtest.h>

using namespace std;
using namespace testing;

class SolutionTest: public Test {
public:
  template<typename Solution>
  void test_basic() {
    ASSERT_EQ(0, Solution().strStr("sadbutsad", "sad"));
    ASSERT_EQ(-1, Solution().strStr("leetcode", "leeto"));
    ASSERT_EQ(2, Solution().strStr("hello", "ll"));
    ASSERT_EQ(2, Solution().strStr("abcd", "c"));
    ASSERT_EQ(2, Solution().strStr("abc", "c"));
    ASSERT_EQ(4, Solution().strStr("aabaaabaaac", "aabaaac"));
    ASSERT_EQ(6, Solution().strStr("ababcaababcaabc", "ababcaabc"));


    ASSERT_EQ(0, Solution().strStr("xabc", "x"));
    ASSERT_EQ(1, Solution().strStr("axbc", "x"));
    ASSERT_EQ(2, Solution().strStr("abxc", "x"));
    ASSERT_EQ(3, Solution().strStr("abcx", "x"));
    ASSERT_EQ(-1, Solution().strStr("abc", "x"));


    ASSERT_EQ(0, Solution().strStr("xyzabc", "xyz"));
    ASSERT_EQ(1, Solution().strStr("axyzbc", "xyz"));
    ASSERT_EQ(2, Solution().strStr("abxyzc", "xyz"));
    ASSERT_EQ(3, Solution().strStr("abcxyz", "xyz"));
    ASSERT_EQ(-1, Solution().strStr("abc", "xyz"));
  }
};

TEST_F(SolutionTest, test_basic_rabin_karp) {
  test_basic<str_str_rabin_karp::Solution>();
}

TEST_F(SolutionTest, test_basic_stl) {
  test_basic<str_str_stl::Solution>();
}

int main(int argc, char** argv) {
  InitGoogleTest(&argc, argv);
  return RUN_ALL_TESTS();
}
