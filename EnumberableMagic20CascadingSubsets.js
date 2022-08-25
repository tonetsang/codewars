function eachCons(array, n) {
    return array.map((x, y) => array.slice(y, y + n)).filter(z => z.length == n)
  }