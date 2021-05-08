function differenceInAges(ages){
    let a = Math.min(...ages)
    let b = Math.max(...ages)
    return [a, b, b - a]
  }