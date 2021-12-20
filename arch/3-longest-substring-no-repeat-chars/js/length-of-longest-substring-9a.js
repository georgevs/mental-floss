const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~ ";

const lengthOfLongestSubstring = (s) => {
  let r = 0;
  const chs = Array(256);
  for (let i = 0, j = 0; j < s.length; ++j) {
    if (chs[s.charCodeAt(j)]) {
      for (; i < j && s[i] != s[j]; ++i) {
        chs[s.charCodeAt(i)] = undefined;
      }
      ++i;
    } else {
      chs[s.charCodeAt(j)] = 1;
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
