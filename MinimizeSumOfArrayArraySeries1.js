function minSum(arr) {
    arr = arr.sort((a, b) => a - b)
    let mid = Math.floor(arr.length / 2),
        hi = arr.slice(mid).reverse(),
        lo = arr.slice(0, mid),
        sum = 0
    for(let i = 0; i < mid; i++){
      sum += hi[i] * lo[i]
    }
    return sum
  }