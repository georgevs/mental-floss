const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~ ";

const lengthOfLongestSubstring = (s) => {
  let r = 0;
  const chs = new Map();
  for (let i = 0, j = 0; j < s.length; ++j) {
    const chi = chs.get(s[j]);
    if (chi != undefined && i <= chi) {
      i = chi + 1;
    } else {
      const l = j - i + 1;
      if (r < l) {
        r = l;
        if (r >= charset.length) break;
      }
    }
    chs.set(s[j], j);
  }
  return r;
};

module.exports = { lengthOfLongestSubstring };
