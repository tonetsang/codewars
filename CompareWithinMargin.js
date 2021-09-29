function closeCompare(a, b, margin){
    return Math.abs(a - b) <= (margin || 0) ? 0 : a > b ? 1 : -1
  }