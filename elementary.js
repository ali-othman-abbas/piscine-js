// const multiply = (a, b) => (b < 0) ? -positiveMult(a, -b) : positiveMult
// const divide = (a, b) => (b < 0) ? -positiveDivide(a, -b) : positiveMult
const multiply = (a, b) => (b > 0) ? (a + multiply(a, b - 1)) : 0
const divide = (a, b) => (b <= a) ? 1 + divide(a - b, b) : 0
const modulo = (a, b) => (b <= a) ? modulo(a - b, b) : a


console.log(modulo(13, 5))