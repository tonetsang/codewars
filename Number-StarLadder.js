function pattern(n){
  let output = []
  for(let i = 1; i < n + 1; i++){
    output.push(1 + '*'.repeat(i - 1) + i)
  }
  return output.join('\n').replace(1, '')
}