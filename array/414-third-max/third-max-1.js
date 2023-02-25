const thirdMax = (xs) => {
  const r = Array.from(new Set(xs)).sort((l, r) => r - l);
  return r[2] ?? r[0];
};

module.exports = thirdMax;

if (require.main === module) {
  require('./test')(module.exports, Number.parseInt(process.argv[2]));
}
