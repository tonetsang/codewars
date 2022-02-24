function pattern(n){
    let output = []
      for(let i = 1; i <= n; i++) {
        output.push(Array(i + 1).join(i))
      }
    return output.join('\n')
  }