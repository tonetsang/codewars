function isTriangular(t) {
    let sum = 0
    for (let i = 1; sum <= t; i++){
      sum = sum + i
      if(sum == t) return true
    }
    return false
  }