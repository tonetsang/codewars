function modifiedSum(a, n) {
    return a.map(x => x ** n).reduce((a, b) => a + b) - a.reduce((a, b) => a + b)
  }