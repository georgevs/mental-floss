const reverseString = (xs) => { 
  const iter = (i, j) => {
    if (i < j) { ([xs[i], xs[j]] = [xs[j], xs[i]]); iter(i + 1, j - 1) }
  };
  iter(0, xs.length - 1);
  return xs;
};

module.exports = reverseString;

if (require.main === module) {
  require('./test')(module.exports, Number.parseInt(process.argv[2]));
}

