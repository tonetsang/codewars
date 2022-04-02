function explode(s) {
    return s.replace(/\d/g, d => d.repeat(d))
  }