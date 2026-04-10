// const multiply = (a, b) => (b < 0) ? -positiveMult(a, -b) : positiveMult
// const divide = (a, b) => (b < 0) ? -positiveDivide(a, -b) : positiveMult
const multiply = (a, b) => (b < 0 ? positiveMult(-a, -b) : positiveMult(a, b));
const positiveMult = (a, b) => (b > 0 ? a + positiveMult(a, b - 1) : 0);
const divide = (a, b) =>
  a < 0 && b < 0
    ? positiveDiv(-a, -b)
    : a < 0
      ? -positiveDiv(-a, b)
      : b < 0
        ? -positiveDiv(a, -b)
        : positiveDiv(a, b);
const positiveDiv = (a, b) => (b <= a ? 1 + positiveDiv(a - b, b) : 0);
const modulo = (a, b) =>
  a < 0 ? -positiveMod(-a, Math.abs(b)) : positiveMod(a, Math.abs(b));
const positiveMod = (a, b) => (b <= a ? positiveMod(a - b, b) : a);

console.log(modulo(34, 78));
