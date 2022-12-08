const spiralOrder = (xs) => {
  // console.log('s', xs);
  const r = [];
  const iter = (x0, y0, w, h) => {
    if (w <= 0 || h <= 0) { return }
    let x, y;
    for (x = x0, y = y0; x < x0 + w; ++x) { r.push(xs[y][x]) }
    if (y0 + 1 < y0 + h) {
      for (x = x0 + w - 1, y = y0 + 1; y < y0 + h; ++y) { r.push(xs[y][x]) }
      if (x0 < x0 + w - 1) {
        for (x = x0 + w - 1, y = y0 + h - 1; x-- > x0;) { r.push(xs[y][x]) }
        for (y = y0 + h - 1, x = x0; y-- > y0 + 1;) { r.push(xs[y][x]) }
        iter(x0 + 1, y0 + 1, w - 2, h - 2);
      }
    }
  };
  iter(0, 0, xs[0].length, xs.length);
  return r;
};

module.exports = spiralOrder;

if (require.main === module) {
  require('./test')(module.exports, Number.parseInt(process.argv[2]));
}
