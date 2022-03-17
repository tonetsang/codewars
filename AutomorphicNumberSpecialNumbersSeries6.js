function automorphic(n){
    n = n.toString()
    let square = (n**2).toString()
    return n == square.slice(-n.length) ? 'Automorphic' : 'Not!!'
  }