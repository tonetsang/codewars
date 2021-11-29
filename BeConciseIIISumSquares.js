function sumSquares(array) {
    return array.map(sq => sq ** 2).reduce((a, b) => a + b)
  }