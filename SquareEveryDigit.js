function squareDigits(num){
    return Number(num.toString().split('').map(a => a**2).join(''))
  }