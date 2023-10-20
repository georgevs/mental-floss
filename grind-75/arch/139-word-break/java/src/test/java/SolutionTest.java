import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertTrue;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

class SolutionTest {
  @Test
  void testSolution() {
    assertTrue(new Solution().wordBreak("leetcode", List.of("leet", "code")));
    assertTrue(new Solution().wordBreak("applepenapple", List.of("apple", "pen")));
    assertFalse(new Solution().wordBreak("catsandog", List.of("cats", "dog", "sand", "and", "cat")));
  }
}
