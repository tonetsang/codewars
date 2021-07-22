function distinct(a) {
    return a.filter((item,index,arr) => (arr.indexOf(item) === index))
  }