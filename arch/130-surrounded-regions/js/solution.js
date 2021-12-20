const { performance } = require('perf_hooks');
const { solve } = require('./surrounded-regions-2');

const solution = tests => {
  for (const { input, output } of tests) {
    const r = solve(input);
    if (r !== output) {
        // console.log('failed:', [input, output, r]);
        // throw Error();
    }
  }
};

const tests = [
  // { input: [
  //     ["X","X","X","X"],
  //     ["X","O","O","X"],
  //     ["X","X","O","X"],
  //     ["X","O","X","X"]
  //   ], 
  //   output: [
  //     ["X","X","X","X"],
  //     ["X","X","X","X"],
  //     ["X","X","X","X"],
  //     ["X","O","X","X"]
  //   ] },
  // { input: [["X"]], output: [["X"]] },
  { input: [
      ["O","X","X","O","X"],
      ["X","O","O","X","O"],
      ["X","O","X","O","X"],
      ["O","X","O","O","O"],
      ["X","X","O","X","O"]
    ],
    output: [
      ["O","X","X","O","X"],
      ["X","X","X","X","O"],
      ["X","X","X","O","X"],
      ["O","X","O","O","O"],
      ["X","X","O","X","O"]
    ] 
  }
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
