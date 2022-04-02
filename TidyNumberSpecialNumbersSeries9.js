function tidyNumber(n){
    return String(n).split('').every((v, i, a) => (i == 0 || v >= a[i - 1]))
  }