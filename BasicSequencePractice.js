function sumOfN(n) {
  let num = 0
  let arr = []
  arr.push(num)
  for(let i = 1; i <= Math.abs(n); i++){
    num += i
    if(n < 0) arr.push(-num)
    else arr.push(num)
  }
  return arr
};