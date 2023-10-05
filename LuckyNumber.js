function isLucky(n) {
    return String(n).split('').reduce((a, b) => a + b) % 9 == 0
  }