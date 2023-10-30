/*
  rm -rf __bin ; mkdir __bin
  (cd __bin ; curl -s \
    -O https://repo1.maven.org/maven2/org/junit/jupiter/junit-jupiter-api/5.8.2/junit-jupiter-api-5.8.2.jar \
    -O https://repo1.maven.org/maven2/org/opentest4j/opentest4j/1.2.0/opentest4j-1.2.0.jar \
    -O https://repo1.maven.org/maven2/org/apiguardian/apiguardian-api/1.1.2/apiguardian-api-1.1.2.jar \
    -O https://repo1.maven.org/maven2/org/junit/platform/junit-platform-commons/1.8.2/junit-platform-commons-1.8.2.jar \
    -O https://repo1.maven.org/maven2/org/json/json/20231013/json-20231013.jar)
  javac -d __bin -cp '__bin/*' SolutionTest.java
  java -cp '__bin:__bin/*' SolutionTest

  https://junit.org/junit5/docs/5.8.1/api/index.html
*/

import static org.junit.jupiter.api.Assertions.assertEquals;

import java.io.FileInputStream;
import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import org.json.JSONArray;

class SolutionTest {
  public static void main(String[] args) throws IOException {
    assertEquals(49, new Solution().maxArea(new int[]{1, 8, 6, 2, 5, 4, 8, 3, 7}));
    assertEquals(1, new Solution().maxArea(new int[]{1, 1}));
    assertEquals(97658256, new Solution().maxArea(loadTestData("test-10000")));
    assertEquals(50000000, new Solution().maxArea(loadTestData("test-20000")));
  }

  static int[] loadTestData(String id) throws IOException {
    // Path currentDir = Paths.get("").toAbsolutePath();

    String classFilePath = SolutionTest.class.getProtectionDomain().getCodeSource().getLocation().getPath();
    Path dataFilePath = Paths.get(classFilePath, String.format("../../%s.json", id));
    String text;
    try (var ins = new FileInputStream(dataFilePath.toFile())) {
      text = new String(ins.readAllBytes(), StandardCharsets.UTF_8);
    }

    var jxs = new JSONArray(text);
    var axs = new ArrayList<Object>();
    jxs.iterator().forEachRemaining(axs::add);
    int[] xs = axs.stream().mapToInt(x->(Integer)x).toArray();
    return xs;
  }
}

class Solution {
  int maxArea(int[] xs) {
    int r = 0;
    for (int i = 0, j = xs.length-1; i < j; ) {
      int d = j-i;
      int ri = d * (xs[i] < xs[j] ? xs[i++] : xs[j--]);
      r = Math.max(r, ri);
    }
    return r;
  }
}
