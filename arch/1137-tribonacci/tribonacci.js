const tribonacci = (x) => {
  const y = [0, 1, 1];
  for (let i = 3; i <= x; ++i) {
    y[i] = y[i-3] + y[i-2] + y[i-1];
  }
  return y[x];
};

const assert = (e, r) => console.assert(e === r, `expected: ${e}, result: ${r}`);

assert(4, tribonacci(4));
assert(1389537, tribonacci(25));
