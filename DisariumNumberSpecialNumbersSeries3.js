function disariumNumber(n){
    return n == [...n.toString()].map(Number).reduce((acc, cur, idx) => (acc + Math.pow(cur, idx + 1)), 0) ? "Disarium !!" : "Not !!"
  }