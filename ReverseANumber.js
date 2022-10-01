function reverseNumber(n) {
    return parseFloat(String(n).split('').reverse().join('')) * Math.sign(n)
  }