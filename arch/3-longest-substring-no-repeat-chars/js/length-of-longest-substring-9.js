const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~ ";

const lengthOfLongestSubstring = (s) => {
  let r = 0;
  const chs = new Set();
  for (let i = 0, j = 0; j < s.length; ++j) {
    if (chs.has(s[j])) {
      for (; i < j && s[i] != s[j]; ++i) {
        chs.delete(s[i]);
      }
      ++i;
    } else {
      chs.add(s[j]);
      const l = j - i + 1;
      if (r < l) {
        r = l;
        if (r >= charset.length) break;
      }
    }
  }
  return r;
};

module.exports = { lengthOfLongestSubstring };
