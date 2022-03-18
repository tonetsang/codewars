function balancedNum(number) {
    number = String(number).split('').map(Number)
    if (number.length <= 2) {
          return "Balanced"
    }
    const oneIfEven = (1 - number.length % 2)
    const middleIndex1 = Math.floor(number.length / 2) - oneIfEven
    const middleIndex2 = Math.ceil(number.length / 2) + oneIfEven
  
    const left = number.slice(0, middleIndex1)
    const right = number.slice(middleIndex2)
  
    const sum = a => a.reduce((a, b) => a + b)
  
    return sum(left) === sum(right) ? "Balanced" : "Not Balanced"
  }