const { asserteq } = require('../../../utils/asserteq');

const test = (alienOrder, n) => loop(n || 1, () => {
  asserteq('wertf', alienOrder(['wrt', 'wrf', 'er', 'ett', 'rftt']));
  asserteq('zx', alienOrder(['z','x']));
  asserteq('', alienOrder(['z','x','z']));
  asserteq('z', alienOrder(['z','z']));
  asserteq('', alienOrder(['abc','ab']));
});

const loop = (n, fn) => { for (let i = 0; i < n; ++i) fn(i) };

module.exports = test;

if (require.main === module) {
  test(require('./alien-order-1'));
  test(require('./alien-order-2'));
  test(require('./alien-order-kahn-1'));
  test(require('./alien-order-kahn-2'));
}
