function singleDigit(n) {
    if(n < 10) return n
    return singleDigit(
      n.toString(2).split('').map(Number).reduce((a, b) => a += b)
    )
  }