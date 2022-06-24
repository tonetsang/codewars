function isNarcissistic(n) {
    let arr = String(n).split('')
    return n == arr.map(x => Math.pow(x, arr.length)).reduce((a, b) => a + b)
  }