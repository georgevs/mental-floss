import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.assertEquals;

class Solution {
  public String longestPalindrome(String xs) {
    int n=xs.length();
    for (int k = n; k >= 1; --k) {
      for (int i = 0; i <= n - k; ++i) {
        if (isPalindrome(xs, i, k)) {
          return xs.substring(i, i + k);
        }
      }
    }
    return xs;
  }

  static boolean isPalindrome(String xs, int i, int n) {
    for (int j = i + n - 1; i < j; ++i, --j) {
      if (xs.charAt(i) != xs.charAt(j)) {
        return false;
      }
    }
    return true;
  }
}

public class SolutionTest {
  @Test
  void testSolution() {
    assertEquals("bab", new Solution().longestPalindrome("babad"));
    assertEquals("bb", new Solution().longestPalindrome("cbbd"));
  }
}