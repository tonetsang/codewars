function pattern(n){
    let arr = []
    for(let i = 1; i <= n; i++){
      if(i % 2 !== 0){
        arr.push(Array(i + 1).join(i))
      }
    }
    return arr.join('\n') 
  }