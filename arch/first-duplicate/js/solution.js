const { performance } = require('perf_hooks');
const { firstDuplicate } = require('./first-duplicate');

const solution = tests => {
  for (const { a, e } of tests) {
    const r = firstDuplicate(a);
    if (r !== e) {
        console.log('failed:', [a, e, r]);
        throw Error();
    }
  }
};

const tests = [
  { a: [2,1,3,5,3,2], e: 3 },
  { a: [2,2], e: 2 },
  { a: [2,4,3,5,1], e: -1 },
];

// const m = 10, n = 10000;
const m = 1, n = 1;

for (let j = 0; j < m; ++j) {
  const t = performance.now();
  for (let i = 0; i < n; ++i) {
    solution(tests);
  }
  console.log(performance.now() - t);
}
