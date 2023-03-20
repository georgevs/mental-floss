const maximumGap = (xs) => {
  //console.log(xs);

  if (xs.length < 2) { return 0 }

  let xl = Math.min(...xs), xr = Math.max(...xs);
  
  const d = xr - xl, w = (d / xs.length | 0) || 1, ys = Array.from({ length: (d + w) / w | 0 }, () => []);
  
  //console.log('xl',xl,'xr',xr,'d',d,'w',w,'n',ys.length,'ys',ys);

  xs.forEach(x => {
    ys[(x - xl) / w | 0].push(x);
  });

  //console.log(ys);

  const zs = ys.filter(({ length }) => length > 0)
    .map((y, i, zs) => i == 0 ? 0 : Math.min(...y) - Math.max(...zs[i-1]));

  //console.log(zs);

  return Math.max(...zs);
};

module.exports = maximumGap;

if (require.main === module) {
  require('./test')(module.exports, Number.parseInt(process.argv[2]));
}
