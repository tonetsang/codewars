function specialNumber(n){
    return String(n).split('').every(x => x == 0 || x == 1 || x == 2 || x == 3 || x == 4 || x == 5) ? 'Special!!' : 'NOT!!'
  }