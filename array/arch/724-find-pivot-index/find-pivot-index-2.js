const pivotIndex = (xs) => {
  const lxs = suml(xs), rxs = sumr(xs);
  for (let i = 0; i < xs.length; ++i) { if (lxs[i] === rxs[i]) return i }
  return -1;
};

const suml = (xs) => {
  const rs = Array(xs.length);
  for (let acc = 0, i = 0; i < xs.length; ++i) { rs[i] = acc; acc += xs[i] }
  return rs;
};
const sumr = (xs) => {
  const rs = Array(xs.length);
  for (let acc = 0, i = xs.length; i-- > 0; ) { rs[i] = acc; acc += xs[i] }
  return rs;  
}

module.exports = pivotIndex;

if (require.main === module) {
  require('./test')(module.exports, Number.parseInt(process.argv[2]));
}
