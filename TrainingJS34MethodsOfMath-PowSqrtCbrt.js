function cutCube(volume,n){
    let cube = n => Number.isInteger(Math.cbrt(n))
    return cube(n) && cube(volume / n)
  }