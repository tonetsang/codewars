function uniTotal(x){
    return x.split('').reduce((a, b) => a + b.charCodeAt(), 0)
  }