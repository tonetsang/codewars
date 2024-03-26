function arraySum(arr) {
    return JSON.stringify(arr).match(/[0-9\.]+/g).reduce((a, b) => a + b * 1, 0)
  }