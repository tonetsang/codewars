function mostFrequentItemCount(collection) {
    return collection.length == 0 ? 0 : Math.max(...Object.values(collection.reduce((x, y) => (x[y] = x[y] + 1 || 1, x), {})))
  }