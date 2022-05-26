function partlist(arr) {
    return arr.map((x, y) => [arr.slice(0, y).join(' '), arr.slice(y).join(' ')]).slice(1)
  }