const validMountainArray = (xs) => {
  const n = xs.length;
  if (n < 3) { return false }
  let i;
  for (i = 1; i < n && xs[i - 1] < xs[i]; ++i) { }
  if (i==1 || i == n) { return false }
  for (; i < n && xs[i - 1] > xs[i]; ++i) { }
  return i == n;
};

module.exports = validMountainArray;

if (require.main === module) {
  require('./test')(module.exports, Number.parseInt(process.argv[2]));
}
