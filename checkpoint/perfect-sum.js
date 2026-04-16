function isPerfectNum(n) {
  let sum = 0;
  for (let i = 1; i < n; i++) {
    sum = sum + (n % i == 0 ? i : 0)
  }
  
  return sum == n
}


const result = isPerfectNum(28)

console.log(result)