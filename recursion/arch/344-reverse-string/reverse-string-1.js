const reverseString = (xs) => {
  return (
    xs.length <= 1 ? xs
      : reverseString(xs.slice(1))
          .concat(xs.at(0))
  );
};

module.exports = reverseString;

if (require.main === module) {
  require('./test')(module.exports, Number.parseInt(process.argv[2]));
}

