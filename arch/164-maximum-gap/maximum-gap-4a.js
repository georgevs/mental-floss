const maximumGap = (xs) => {
  //console.log(xs);

  if (xs.length < 2) { return 0 }

  let xl = +Infinity, xr = -Infinity;
  for (let x of xs) {
    xl = Math.min(xl, x);
    xr = Math.max(xr, x);
  }
  
  const d = xr - xl, w = (d / xs.length | 0) || 1, ys = Array((d + w) / w | 0);
  
  //console.log('xl',xl,'xr',xr,'d',d,'w',w,'n',ys.length,'ys',ys);

  for (let x of xs) {
    const i = (x - xl) / w | 0;
    ys[i] = (ys[i] ?? new Set).add(x);
  }

  //console.log(ys);

  let r, yxr0;
  for (let y of ys) {
    if (y) {
      let yxl = +Infinity, yxr = -Infinity;
      for (let x of y.keys()) {
        yxl = Math.min(yxl, x);
        yxr = Math.max(yxr, x);
      }
      if (yxr0 !== undefined) { r = Math.max(r ?? 0, yxl - yxr0) }
      yxr0 = yxr;
    }
  }

  return r ?? 0;
};

module.exports = maximumGap;

if (require.main === module) {
  require('./test')(module.exports, Number.parseInt(process.argv[2]));
}
