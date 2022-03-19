function strong(n) {
    let numArray = n.toString().split("").map(Number)
    let factorialArray = []
    
    numArray.forEach((num) => {
      let factorial = 1
      let i = 1
      while(i <= num) {
        factorial = factorial * i
        i++
      }
      factorialArray.push(factorial)
    })
    
    let factorialNum = factorialArray.reduce((a, b) => a + b)
    return n == factorialNum ? 'STRONG!!!!' : 'Not Strong !!'
  }