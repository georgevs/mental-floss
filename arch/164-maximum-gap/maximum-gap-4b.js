const maximumGap = (xs) => {
  //console.log(xs);

  if (xs.length < 2) { return 0 }

  let xl = Math.min(...xs), xr = Math.max(...xs);
  
  const d = xr - xl, w = (d / xs.length | 0) || 1, ys = Array((d + w) / w | 0);
  
  //console.log('xl',xl,'xr',xr,'d',d,'w',w,'n',ys.length,'ys',ys);

  xs.forEach(x => {
    const i = (x - xl) / w | 0;
    ys[i] = (ys[i] ?? new Set).add(x);
  });

  //console.log(ys);

  const zs = ys.filter(Boolean).map(y => [Math.min(...y.keys()), Math.max(...y.keys())]);

  //console.log(zs);

  const { r } =  zs.reduce(({ r, yr0 }, [yl, yr]) =>  ({ r: Math.max(r, yl - (yr0 ?? yl)), yr0: yr }), { r: 0 });
  return r;
};

module.exports = maximumGap;

if (require.main === module) {
  require('./test')(module.exports, Number.parseInt(process.argv[2]));
}
