function generatePairs(m, n) {
    const arr = []
    for(let i = m; i <= n; i++){
      for(let j = i; j <= n; j++){
        if(j >= i) arr.push([i, j])
      }
    }
    return arr
  }