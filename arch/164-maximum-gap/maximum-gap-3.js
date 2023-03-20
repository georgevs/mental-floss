const maximumGap = (xs) => {
  //console.log(xs);

  let xl = Infinity, xr = -Infinity;
  for (let x of xs) {
    xl = Math.min(xl, x);
    xr = Math.max(xr, x);
  }

  //console.log(xl, xr);

  let ys = Array(xr - xl + 1).fill(0);
  for (let x of xs) {
    ys[x - xl]++
  }

  //console.log(ys);

  let r = 0;
  for (let i = 0, j = 0; j < ys.length; ++j) {
    if (ys[j] > 0) {
      r = Math.max(r, j - i);
      i = j;
    }
  }
  return r;
};

module.exports = maximumGap;

if (require.main === module) {
  require('./test')(module.exports, Number.parseInt(process.argv[2]));
}
