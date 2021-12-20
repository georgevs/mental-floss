const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~ ";

const lengthOfLongestSubstring = (s) => {
  let r = 0;
  for (let i = 0; i < s.length; ++i) {
    const len = Math.min(s.length, i + charset.length);
    let ss;
    for (let j = i + 1; j <= len; ++j) {
      const l = j - i;
      if (r < l) {
        if (ss === undefined) {
          ss = new Set(s.substring(i, j - 1));
          if (Array.from(ss).length < (j - 1 - i)) break;
        }
        const ch = s.charAt(j - 1);
        if (ss.has(ch)) break;
        ss.add(ch);
        r = l;
      }
    }
  }
  return r;
};

module.exports = { lengthOfLongestSubstring };
