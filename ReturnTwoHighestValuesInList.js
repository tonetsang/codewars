function twoHighest(arr) {
    arr.sort((a, b) => b - a)
    return [...new Set(arr)].slice(0, 2)
  }