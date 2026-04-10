const sign = (num1) => (num1 == 0) ? 0 : num1/(Math.abs(num1))

const sameSign = (num1, num2) => (sign(num1) == sign(num2))