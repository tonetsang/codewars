function whatNumberIsIt(n){
    return `Input number is ${n == 1.7976931348623157e+308 ? 'Number.MAX_VALUE' : n == 5e-324 ? 'Number.MIN_VALUE' : isNaN(n) ? 'Number.NaN' : n == -Infinity ? 'Number.NEGATIVE_INFINITY' : n == Infinity ? 'Number.POSITIVE_INFINITY' : n}`
  }