function unusedDigits(...arr) {
    let digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    return digits.filter(x => !arr.join().includes(x)).join('')
  }