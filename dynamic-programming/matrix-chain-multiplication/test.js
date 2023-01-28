const { asserteq } = require('../../utils/asserteq');

const loop = (n, fn) => { for (let i = 0; i < n; ++i) fn() };
const test = (mcm, n) => loop(n || 1, () => {
  asserteq(7500, mcm([10, 100, 5, 50]));
  asserteq(15125, mcm([30, 35, 15, 5, 10, 20, 25]));
});

module.exports = test;

if (require.main === module) {
  test(require('./mcm'));
}
