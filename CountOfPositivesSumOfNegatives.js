function countPositivesSumNegatives(input) {
    if(input == null || input == undefined || input.length == 0) {
      return []
    } else {
    let count = input.filter(p => p > 0).length
    let sum = input.filter(n => n < 0).reduce((a,b)=>a+b)
      return [count, sum]
    }
  }