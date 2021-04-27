function positiveSum(arr) {
    if(arr.length === 0){
      return 0
    }
    const pos = arr.filter(num => num >= 0)
    if(pos.length === 0){
      return 0
    }
    const result = pos.reduce((x, y) => x + y)
    return result
  }