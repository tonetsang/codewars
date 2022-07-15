function largest(n,xs){
    return xs.sort((a, b) => a < b ? 1 : a > b ? -1 : 0).slice(0, n).reverse()
  }