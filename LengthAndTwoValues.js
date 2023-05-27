function alternate(n, firstValue, secondValue){
  let arr = []
  for(let i = 1; i <= n * 2; i++){
    arr.push(firstValue, secondValue)
  }
  return arr.slice(0, n)
}