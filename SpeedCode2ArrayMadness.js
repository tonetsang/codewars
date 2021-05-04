function arrayMadness(a, b) {
    return a.map(c=>c**2).reduce((a,b)=>a + b) > b.map(c=>c**3).reduce((a,b)=>a + b) ? true : false
  }