const spiralOrder = (xs) => {
  // console.log('s', xs);
  const r = [];
  let x0 = 0, y0 = 0, w = xs[0].length, h = xs.length;
  while (w > 0 && h > 0) {
    let x, y;
    for (x = x0, y = y0; x < x0 + w; ++x) { r.push(xs[y][x]) }
    if (y0 + 1 >= y0 + h) { break }
    for (x = x0 + w - 1, y = y0 + 1; y < y0 + h; ++y) { r.push(xs[y][x]) }
    if (x0 >= x0 + w - 1) { break }
    for (x = x0 + w - 1, y = y0 + h - 1; x-- > x0;) { r.push(xs[y][x]) }
    for (y = y0 + h - 1, x = x0; y-- > y0 + 1;) { r.push(xs[y][x]) }
    x0 += 1, y0 += 1, w -= 2, h -= 2;
  }
  return r;
};

module.exports = spiralOrder;

if (require.main === module) {
  require('./test')(module.exports, Number.parseInt(process.argv[2]));
}
