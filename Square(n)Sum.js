function squareSum(numbers){
    if(numbers.length === 0) {return 0}
    let squares = numbers.map(x => x **2)
    let sum = squares.reduce((a, c) => a += c)
    return sum
  }