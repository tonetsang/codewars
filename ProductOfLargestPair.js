function maxProduct(a) {
    let max = Math.max.apply(Math, a)
    a.splice(a.indexOf(max), 1)
    return max * Math.max.apply(Math, a)
  }