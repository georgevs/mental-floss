
const firstDuplicate = (a) => {
  for (let i = 0; i < a.length; ++i) {
    const e = Math.abs(a[i]) - 1;
    if (a[e] < 0) return e + 1;
    a[e] = -a[e];
  }
  return -1;
};

module.exports = { firstDuplicate };
