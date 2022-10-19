function sumOfIntegersInString(s){
    return s.split(/([^0-9])/g).map(x => parseInt(x)).filter(Boolean).reduce((x, y) => x + y, 0)
  }