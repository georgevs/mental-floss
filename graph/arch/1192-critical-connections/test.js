const { asserteq, UnorderedArray: UA } = require('../../utils/asserteq');

const loop = (n, fn) => { for (let i = 0; i < n; ++i) fn() };
const test = ({ criticalConnections }, n = 1) => loop(n, () => {
  asserteq([UA.of(1, 3)], criticalConnections(4, [[0, 1], [1, 2], [2, 0], [1, 3]]));
  asserteq([[0,1]], criticalConnections(2, [[0,1]]));
  asserteq(require('./test-100000-expected.json'), criticalConnections(100000, require('./test-100000.json')));
});

module.exports = test;

if (require.main === module) {
  test({ criticalConnections: require('./critical-connections-1') });
  test({ criticalConnections: require('./critical-connections-2') });
  test({ criticalConnections: require('./critical-connections-3') });
}
