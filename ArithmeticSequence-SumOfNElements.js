function ArithmeticSequenceSum(a, r, n) {
    let arr = [a]
    for(let i = 2; i <= n; i++){
      arr.push(a += r)
    }
    return arr.reduce((a, b) => a + b)
  }