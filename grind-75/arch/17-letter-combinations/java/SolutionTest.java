/*
  rm -rf __bin ; mkdir __bin
  (cd __bin ; curl -s \
    -O https://repo1.maven.org/maven2/org/junit/jupiter/junit-jupiter-api/5.8.2/junit-jupiter-api-5.8.2.jar \
    -O https://repo1.maven.org/maven2/org/opentest4j/opentest4j/1.2.0/opentest4j-1.2.0.jar \
    -O https://repo1.maven.org/maven2/org/apiguardian/apiguardian-api/1.1.2/apiguardian-api-1.1.2.jar \
    -O https://repo1.maven.org/maven2/org/junit/platform/junit-platform-commons/1.8.2/junit-platform-commons-1.8.2.jar)
  javac -d __bin -cp '__bin/*' SolutionTest.java
  java -cp '__bin:__bin/*' SolutionTest

  https://junit.org/junit5/docs/5.8.1/api/index.html
*/

import static org.junit.jupiter.api.Assertions.assertArrayEquals;
import static org.junit.jupiter.api.Assertions.assertEquals;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.Map;
import java.util.ArrayList;

public class SolutionTest {
  public static void main(String[] args) {
    assertEquals(List.of(), sorted(new Solution().letterCombinations("")));
    assertEquals(List.of("a", "b", "c"), sorted(new Solution().letterCombinations("2")));
    assertEquals(List.of("ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"),
        sorted(new Solution().letterCombinations("23")));
  }

  static List<String> sorted(List<String> xs) {
    System.out.println(xs.getClass());
    var ys = new ArrayList<String>(xs);
    Collections.sort(ys);
    return ys;
  }
}

class Solution {
  List<String> letterCombinations(String xs) {
    if (xs.length() == 0) {
      return List.of();
    }
    var xzs = Map.of(
        '2', "abc", '3', "def", '4', "ghi",
        '5', "jkl", '6', "mno", '7', "pqrs",
        '8', "tuv", '9', "wxyz");
    var ys = new ArrayList<String>(List.of(""));
    for (int i = 0; i < xs.length(); ++i) {
      char x = xs.charAt(i);
      String zs = xzs.get(x);
      var ys2 = new ArrayList<String>();
      for (int j = 0; j < zs.length(); ++j) {
        char z = zs.charAt(j);
        for (String y : ys) {
          ys2.add(y + z);
        }
      }
      ys = ys2;
    }
    return ys;
  }
}
