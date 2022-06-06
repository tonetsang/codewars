function calc(x){
    let total1 = x.split('').map(y => y.charCodeAt()).join('')  
    let total2 = total1.replace(/7/g, `1`)
    return total1.split('').reduce((a, b) => +a + +b) - total2.split('').reduce((a, b) => +a + +b)
  }