
const trap = (h) => {
  let r = 0;

  for (let l = 0, b = 0, e = h.length; b + 2 < e; ++l) { // at least 3 elements necessary
    let i = b;
    for ( ; h[i] <= l && i < e; ++i) {} // skip trough
    if (e <= i) break; // done, peak not found
    b = i; // next level begin

    for ( ; i < e; ) {
      for ( ++i; l < h[i] && i < e; ++i) {} // skip peak
      if (e <= i) break; // same end, next level
  
      const le = i; // (possible) next level end
      for ( ++i; h[i] <= l && i < e; ++i) {} // skip trough
      if (e <= i) { e = le; break; } // peak not found, next level
  
      r += i - le;
    }
  }

  return r;
};

module.exports = { trap };
