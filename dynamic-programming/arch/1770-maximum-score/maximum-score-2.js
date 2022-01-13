// n == ns.length
// m == ms.length
// 1 <= m <= 103
// m <= n <= 105
// -1000 <= ns[i], ms[i] <= 1000

const maximumScore = (ns, ms) => Math.max(...scores(ns, ms));
const scores = (ns, ms) => muls(ns, ms).map(xs => xs.reduce(sum));
const muls = (ns, ms) => comb(ns, ms.length).map(xs => mul(xs, ms));
const mul = (xs, ys) => ys.map((y, i) => xs[i] * y);
const sum = (acc, x) => acc + x;

const comb = (xs, n) => 
  n <= 0 ? [xs] :
  xs.length <= 1 ? combx(xs) :
  xs.length <= 2 ? combxy(xs) :
  combxs(xs, n);

const combx = (xs) => [[first(xs)]];
const combxy = (xs) => ((f, l) => [[f, l], [l, f]])(first(xs), last(xs));
const combxs = (xs, n) => [...combfxs(xs, n), ...comblxs(xs, n)];
const combfxs = (xs, n) => combxys(first(xs), comb(tail(xs), n-1));
const comblxs = (xs, n) => combxys(last(xs), comb(heads(xs), n-1));
const combxys = (x, ys) => ys.map(y => [x, ...y]);

const first = (xs) => xs[0];
const last = (xs) => xs[xs.length - 1];
const tail = (xs) => xs.slice(1);
const heads = (xs) => xs.slice(0, -1);


const { asserteq } = require('../../utils/asserteq');

asserteq(14, maximumScore([1,2,3], [3,2,1]));
asserteq(102, maximumScore([-5,-3,-3,-2,7,1], [-10,-5,3,4,6]));

asserteq([10,11,13,14], scores([1,2,3],[3,2,1]));

asserteq([[3,4,3],[3,6,2],[9,2,2],[9,4,1]], muls([1,2,3],[3,2,1]));

asserteq([3,4,3], mul([1,2,3], [3,2,1]));
asserteq([3,4], mul([1,2,3], [3,2]));

const combs = (s, n) => comb(Array.from(s), n).map(xs => xs.join(''));

asserteq(['abc', 'cab'], combs('abc', 1));
asserteq(['abc', 'acb', 'cab', 'cba'], combs('abc', 2));
asserteq(['abc', 'acb', 'cab', 'cba'], combs('abc', 3));

asserteq(['abcd', 'dabc'], combs('abcd', 1));
asserteq(['abcd', 'adbc', 'dabc', 'dcab'], combs('abcd', 2));
asserteq([
  'abcd', 'abdc',
  'adbc', 'adcb',
  'dabc', 'dacb',
  'dcab', 'dcba'
], combs('abcd', 3));
asserteq([
  'abcd', 'abdc',
  'adbc', 'adcb',
  'dabc', 'dacb',
  'dcab', 'dcba'
], combs('abcd', 4));
