const hasRepeatingCharacter = s => Array.from(new Set(s)).length !== s.length;

const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~ ";

const lengthOfLongestSubstring = (s) => {
  let r = 0;
  for (let i = 0; i < s.length; ++i) {
    const len = Math.min(s.length, i + charset.length);
    for (let j = i + 1; j <= len; ++j) {
      const l = j - i;
      if (r < l) {
        if (hasRepeatingCharacter(s.substring(i, j))) break;
        r = l;
      }
    }
  }
  return r;
};

module.exports = { lengthOfLongestSubstring };
