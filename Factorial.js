function factorial(n) {
    if(n === 0 || n === 1){
      return 1
    }else if(n < 0 || n > 12) {
      throw new RangeError('Eat My Ass')
    }
    else{
      for (var i = n - 1; i >= 1; i--) {
      n *= i
      }
    }
    return n
  }