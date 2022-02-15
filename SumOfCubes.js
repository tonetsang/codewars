function sumCubes(n){
  let answer = 0
  for(let i = 1; i <= n; i++){
    answer += i ** 3
  }
  return answer
}