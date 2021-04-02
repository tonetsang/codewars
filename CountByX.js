function countBy(x, n) {
    var z = [];
    for(let i = x; i <= x * n; i++) {
      if(i % x === 0) {
        z.push(i)
      }
    }
    return z;
}