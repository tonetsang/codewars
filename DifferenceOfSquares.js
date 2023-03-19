function differenceOfSquares(n){
    let arr = []
    for(let i = 1; i <= n; i+= 1){
      arr.push(i)
    }
    let sumSquare = arr.reduce((a, b) => a + b) ** 2
    let squareSum = arr.map(x => x ** 2).reduce((a, b) => a + b)
    return sumSquare - squareSum
}