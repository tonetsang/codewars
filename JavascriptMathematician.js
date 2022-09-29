function calculate() {
    return (...arguments2) =>{
      return [...arguments,...arguments2].reduce((a, b) => a + b, 0)
    }
  }