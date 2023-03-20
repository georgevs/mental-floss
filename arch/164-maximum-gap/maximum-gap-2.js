const maximumGap = (xs) => {
  console.log(xs);
  let r0, r1, r;
  for (let x of xs) {
    if (r0 === undefined || r0 < x) {
      r1 = r0; r0 = x;
      if (r1 !== undefined) { r = Math.max(r ?? -Infinity, r0 - r1) }
    }
    console.log(x,r0,r1,r);
  }
  return r ?? 0;
};

module.exports = maximumGap;

if (require.main === module) {
  require('./test')(module.exports, Number.parseInt(process.argv[2]));
}
