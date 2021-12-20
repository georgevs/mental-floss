const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~ ";

const lengthOfLongestSubstring = (s) => {
  let r = 0;
  const chs = new Map();
  for (let i = 0, j = 0; j < s.length; ++j) {
    if (chs[s[j]]) {
      for (; i < j && s[i] != s[j]; ++i) {
        chs[s[i]] = 0;
      }
      ++i;
    } else {
      chs[s[j]] = 1;
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
