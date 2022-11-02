function getSumOfDigits(integer) {
    return integer.toString().split('').map(x => Number(x)).reduce((a, b) => a + b)
  }