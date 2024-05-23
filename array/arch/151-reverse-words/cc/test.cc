/*
  g++ -std=c++20 test.cc -lgtest && ./a.out
*/

#include "reverse-words-regex-token.h"
#include "reverse-words-regex.h"
#include "reverse-words-stack.h"
#include "reverse-words.h"

#include <gtest/gtest.h>

using namespace std;
using namespace testing;

class SolutionTest : public Test {
public:
  template<typename Solution>
  void test_basic() {
    ASSERT_EQ("blue is sky the", Solution().reverseWords("the sky is blue"));
  }
};

TEST_F(SolutionTest, basic_test) {
  test_basic<reverse_words::Solution>();
}

TEST_F(SolutionTest, basic_test_stack) {
  test_basic<reverse_words_stack::Solution>();
}

TEST_F(SolutionTest, basic_test_regex) {
  test_basic<reverse_words_regex::Solution>();
}

TEST_F(SolutionTest, basic_test_regex_token) {
  test_basic<reverse_words_regex_token::Solution>();
}


int main(int argc, char** argv) {
  InitGoogleTest(&argc, argv);
  return RUN_ALL_TESTS();
}
