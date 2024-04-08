function add(...arguments) {
    return Math.round(arguments.reduce((a, c, i) => a + c / (i + 1), 0))
  }