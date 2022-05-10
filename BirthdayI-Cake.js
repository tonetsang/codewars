function cake(x, y){
    let ch = y.split('').reduce((a, b, i) => a + (i % 2 == 0 ? b.charCodeAt(0) : b.charCodeAt(0) - 96), 0);
    return x * 0.7 > ch ? 'That was close!' : 'Fire!'
  }