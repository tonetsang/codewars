function seven(m) {
    let n = 0
    while (('' + m).length > 2) {
      n++
      m = Math.floor(m / 10) - (m % 10) * 2
    }
    return [m, n]
  }