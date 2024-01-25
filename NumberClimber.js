function climb(n){
    let arr = []
    while(n > 0){
      arr.unshift(n)
      n = Math.floor(n / 2)
    }
    return arr
  }