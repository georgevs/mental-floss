import java.util.HashMap;
import java.util.List;
import java.util.Map;

class Solution {
  public boolean wordBreak(String s, List<String> xs) {
    return wordBreak(s, xs, new HashMap<Integer, Boolean>(), 0);
  }

  private static boolean wordBreak(String s, List<String> xs, Map<Integer, Boolean> m, int i) {
    if (m.containsKey(i)) {
      return m.get(i);
    }

    if (i == s.length()) {
      return true;
    }

    for (String x : xs) {
      if (s.startsWith(x, i) && wordBreak(s, xs, m, i + x.length())) {
        return true;
      }
    }
    m.put(i, false);
    return false;
  }
}
