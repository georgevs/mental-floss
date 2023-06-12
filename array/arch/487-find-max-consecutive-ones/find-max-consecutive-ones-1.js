const findMaxConsecutiveOnes = (xs) => {
  const ys = partition(xs);
  const n = ys.length;
  let r = 0;
  for (let i = 0; i < n; ++i) {
    if (ys[i][0] === 1) {
      if (i === 0) { r = ys[i].length }
      else if (i === 1) { r = 1 + ys[i].length }
      else if (ys[i - 1].length === 1) { r = Math.max(r, ys[i - 2].length + 1 + ys[i].length) }
      else { r = Math.max(r, 1 + ys[i].length) }
    }
  }
  if (n > 1 && ys[n - 1][0] === 0) { r = Math.max(r, ys[n - 2].length + 1) }
  else if (n === 1 && ys[0][0] === 0) { r = 1 }
  return r;
};

const partition = xs => {
  const n = xs.length;
  let x, r;
  const rs = [];
  for (let i = 0; i < n; ++i) {
    if (x !== xs[i]) {
      if (r) { rs.push(r) }
      x = xs[i];
      r = [x];
    }
    else { r.push(x) }
  }
  if (r) { rs.push(r) }
  return rs;
}

module.exports = findMaxConsecutiveOnes;

if (require.main === module) {
  require('./test')(module.exports, Number.parseInt(process.argv[2]));
}
