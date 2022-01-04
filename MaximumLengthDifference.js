function mxdiflg(a1, a2) {
    if(a1.length == 0 || a2. length == 0) {
      return -1
    }
    let smallestA1 = Math.min(...a1.map(x => x.length))
    let smallestA2 = Math.min(...a2.map(x => x.length))
    let largestA1 = Math.max(...a1.map(x => x.length))
    let largestA2 = Math.max(...a2.map(x => x.length))
    let diffA1 = Math.abs(smallestA1 - largestA2)
    let diffA2 = Math.abs(largestA1 - smallestA2)
    
    return diffA1 > diffA2 ? diffA1 : diffA2
  }