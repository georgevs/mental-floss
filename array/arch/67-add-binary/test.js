const { asserteq } = require('../../../utils/asserteq');

const loop = (n, fn) => { for (let i = 0; i < n; ++i) fn(i) };
const test = (addBinary, n) => loop(n || 1, () => {
  asserteq('100', addBinary('11', '1'));
  asserteq('10101', addBinary('1010', '1011'));
});

module.exports = test;

if (require.main === module) {
  test(require('./add-binary'));
}
