var isSquare = function(n){
    if (n == 0){
    return true
    }
    let sq = Math.sqrt(n)
    if (n % sq == 0){
      return true
    } else return false
  }