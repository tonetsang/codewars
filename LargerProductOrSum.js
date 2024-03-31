function sumOrProduct(array, n) {
    array.sort((a, b) => a - b)
    
    let sum = array.slice(-n).reduce((a, b) => a + b)
    let product = array.slice(0, n).reduce((a, b) => a * b)
    
    return sum > product ? 'sum' : product > sum ? 'product' : 'same'
  }