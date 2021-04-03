function isDivideBy(number, a, b) {
    return number ? (number % a === 0) && (number % b === 0) : false
  }