// Documentatiton:
//    https://docs.oracle.com/en/java/javase/17/docs/api/index.html
// Playground:
//    https://dev.java/playground/
// Test with:
//    gradle -p java test

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.assertEquals;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
// import java.util.stream.Collectors;
// import java.util.stream.IntStream;

class SolutionTest {
  @Test
  void testSolution() {
    assertEquals(List.of(0, 6), new Solution().findAnagrams("cbaebabacd", "abc"));
    assertEquals(List.of(0, 1, 2), new Solution().findAnagrams("abab", "ab"));
  }
}

class Solution {
  List<Integer> findAnagrams(String xs, String ys) {
    int n = xs.length(), k = ys.length();
    var zs = new ArrayList<Integer>();
    
    if (n < k) { return zs; }
    
    var fy = new int[26];
    for (int i = 0; i < k; ++i) {
      fy[ys.charAt(i)-'a']++;
    }
    // System.out.println(IntStream.of(fy).boxed().collect(Collectors.toList()));

    var fx = new int[26];
    for (int i = 0; i < k; ++i) {
      fx[xs.charAt(i)-'a']++;
    }
    // System.out.println(IntStream.of(fx).boxed().collect(Collectors.toList()));

    for (int i = 0; i <= n-k; ++i) {
      if (Arrays.equals(fx, fy)) {
        zs.add(i);
      }
      int j = i + k;
      if (j < n) {
        fx[xs.charAt(i)-'a']--;
        fx[xs.charAt(j)-'a']++;
      }
    }

    // System.out.println(zs);

    return zs;
  } 
}
