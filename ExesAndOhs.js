function XO(str) {
    let B = str.toLowerCase().split('').filter(l=>l=='x').length
    let D = str.toLowerCase().split('').filter(l=>l=='o').length
    return B==D
  }