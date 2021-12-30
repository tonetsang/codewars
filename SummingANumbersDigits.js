function sumDigits(number) {
    return !number > 0 ? 0 : (number + '').split('').filter(x => x > 0).map(y => parseInt(y)).reduce((a,b) => a + b)
  }