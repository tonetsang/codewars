function inAscOrder(arr) {
    return arr.every((v, i, a) => (i == 0 || v >= a[i - 1]))
  }