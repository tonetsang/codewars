function squares(x, n) {
    let arr = []
    for(let i = 1; i <= n; i++){
      arr.push(x)
      x *= x
    }
    return arr
  }