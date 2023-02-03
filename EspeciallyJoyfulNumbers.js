function numberJoy(n) {
  let sum = String(n).split('').map(Number).reduce((a, b) => a + b)
  return sum * sum.toString().split('').reverse().map(Number).join('') == n
}