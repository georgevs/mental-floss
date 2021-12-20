// m rows, n cols
const solve = (d) => {
  const m = d.length, n = d[0].length;
  const u = [];

  for (let y = 0; y < m; ++y) {
    for (let x = 0; x < n; ++x) {
      if (d[y][x] === 'O') {
        u.push([y, x]);
        d[y][x] = '*';
      }
    }
  }

  if (u.length === 0) return;

  const pt = (y, x) => 0 <= x && x < n && 0 <= y && y < m ? [y, x] : undefined;
  const val = ([y, x]) => d[y][x];
  const dval = ([y, x] = []) => 0 <= x && x < n && 0 <= y && y < m ? `${[y, x]} -> ${d[y][x]}` : undefined;
  const setVal = ([y, x], v) => d[y][x] = v;

  for (let k = 0;; ++k) {

    //console.log({ k, d, u });

    const c = u.length;
    for (let i = 0; i < u.length; ) {
      const [y, x] = u[i];
      const l = pt(y, x - 1), t = pt(y - 1, x), r = pt(y, x + 1), b = pt(y + 1, x);

      //console.log(i, u[i], { l, t, r, b });

      if ((l && val(l) === 'X') &&
          (t && val(t) === 'X') &&
          (r && val(r) === 'X') &&
          (b && val(b) === 'X')) {
        setVal(u[i], 'X');
        u.splice(i, 1);
        //console.log(`* -> X`);
      } 
      else if ((!l || val(l) === 'O') ||
          (!t || val(t) === 'O') ||
          (!r || val(r) === 'O') ||
          (!b || val(b) === 'O')) {
        setVal(u[i], 'O');
        u.splice(i, 1);  
        //console.log(`* -> O`);
      }
      else {
        ++i;
      }
    }
    if (c === u.length) break;
  }

  //console.log({ d, u });

  for (let i = 0; i < u.length; ++i) {
    setVal(u[i], 'X');
  }

  //console.log({ d });
};

module.exports = { solve };
