const findMaxConsecutiveOnes = (xs) => iter(xs, 0, 0, 0);
const iter = (xs, i, k, r) => {
    if (i === xs.length) { return Math.max(k, r) }
    if (xs[i] === 1) { return iter(xs, i + 1, k + 1, r) }
    return iter(xs, i + 1, 0, Math.max(k, r));
};

module.exports = findMaxConsecutiveOnes;

if (require.main === module) {
  require('./test')(module.exports, Number.parseInt(process.argv[2]));
}
