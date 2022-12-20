const rotate = (xs, k0) => {
  // console.log('r:', xs.join(''), k0);
  const n = xs.length, k = k0 % n;
  if (n > 1 && k !== 0) {
    for (let l = 0, c = n - 1; l < c; ++l) {
      const i = (l + k) % n, j = l % k, t = xs[i];
      xs[i] = xs[j]; xs[j] = t;
      // console.log('i:', l, j, i, xs.join(''));
    }
  }
  return xs;
};

module.exports = rotate;

if (require.main === module) {
  require('./test')(module.exports, Number.parseInt(process.argv[2]));
}
