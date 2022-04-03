function alternateCase(s) {
    return s.split('').map(x => {
      if(x == x.toUpperCase()) return x.toLowerCase()
      if(x == x.toLowerCase()) return x.toUpperCase()
    }).join('')
  }