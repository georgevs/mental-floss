const lengthOfLongestSubstring = (s) => {
  let r = 0;
  for (let i = 0, j = 0; r < 95 && j < s.length; ++j) {
    const p = s.slice(i, j).indexOf(s[j]);
    if (0 <= p) {
      i += p + 1;
    } else {
      r = Math.max(r, j - i + 1);
    }
  }
  return r;
};

module.exports = { lengthOfLongestSubstring };
