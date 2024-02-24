function gap(num) {
    const binaryNumber = num.toString(2)
  
    const arr = binaryNumber.split('1').map((binaryGap, index, binaryArr) => {
         return binaryArr[index + 1] != undefined ? binaryGap.length : 0
    })
    
    return Math.max.apply(Math, arr)
  }