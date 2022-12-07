const pivotIndex = (nums) => {
  const sum = (l, r) => {
    let s = 0;
    for (let i = l; i < r; ++i) { s += nums[i] }
    return s;
  };
  for (let i = 0; i < nums.length; ++i) {
    if (sum(0, i) === sum(i + 1, nums.length)) { return i }
  }
  return -1;
};

module.exports = pivotIndex;

if (require.main === module) {
  require('./test')(module.exports, Number.parseInt(process.argv[2]));
}
