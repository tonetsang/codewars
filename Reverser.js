function reverse(n){
  let temp = 0
  while(n){
    temp *= 10
    temp += n % 10
    n = Math.floor(n / 10)
  }
  return temp
}