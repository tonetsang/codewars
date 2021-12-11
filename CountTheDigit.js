function nbDig(n, d) {
    let count = 0
      for (let i = 0; i <= n; i++){
        var square=(i * i + '').split('')
        square.forEach((s) => s == d ? count++ : false)
      }return count
  }