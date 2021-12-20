
const trap = (h) => {
  let r = 0;

  for (let i = 0, b = i, hb = 0, n = 0; i < h.length; n += h[i], ++i) {
    if (hb <= h[i]) {
      r += hb > 0 ? (i - b) * hb - n : 0;
      n = 0;
      b = i;
      hb = h[i];
    }
  }

  for (let i = h.length, b = i, hb = 0, n = 0; i-- > 0; n += h[i]) {
    if (hb < h[i]) {
      r += hb > 0 ? (b - i) * hb - n : 0;
      n = 0;
      b = i;
      hb = h[i];
    }
  }

  return r;
};

module.exports = { trap };
