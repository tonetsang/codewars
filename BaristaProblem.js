function barista(coffees){
    return coffees.sort((a, b) => a - b).reduce((prev, curr, ind) => prev + curr * (coffees.length - ind) + 2 * ind, 0)
  }