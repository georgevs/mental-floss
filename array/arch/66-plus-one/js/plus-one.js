const plusOne = (digits) => {
  const r = [];
  if (digits.length > 0) {
    let c = 1;
    for (let i = digits.length; i-- > 0;) {
        const y = (+digits[i]) + c;
        c = y / 10 | 0; r.unshift(y % 10);
    }
    if (c) { r.unshift(c) }
  }
  return r;
};

module.exports = plusOne;

if (require.main === module) {
  require('./test')(module.exports, Number.parseInt(process.argv[2]));
}
