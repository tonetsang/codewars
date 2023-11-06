function uniqueSum(lst){
    return lst.length > 1 ? lst.filter((v, i) => lst.indexOf(v) == i).reduce((a, b) => a + b) : null
  }