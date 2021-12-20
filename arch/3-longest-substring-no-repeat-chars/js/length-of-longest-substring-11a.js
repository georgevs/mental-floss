// const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~ ";

const lengthOfLongestSubstring = (s) => {
  if (s.length < 2) return s.length;

  let r = 1;
  let ss = s[0];
  for (let i = 0, j = 1; j < s.length; ++j) {
    const ch = s[j];
    const p = ss.indexOf(ch);
    if (0 <= p) {
      i += p + 1;
      ss = s.substring(i, j + 1);
    } else {
      const n = j - i + 1;
      if (r < n) {
        r = n;
        if (95 <= r) break;  // all chars in charset
      }
      ss += ch;
    }
  }
  return r;
};

module.exports = { lengthOfLongestSubstring };
