function nbYear(p0, percent, aug, p) {
    let count = 0
    while(p0 < p) {
      count++
      p0 = p0 + (p0 * percent / 100) + aug
    }
    return count
  }