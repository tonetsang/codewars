function createArrayOfTiers(num) {
    num = num.toString()
    let arr = []
    for(let i = 0; i < num.length; i++){
      arr.push(num.slice(0, i + 1))
    }
    return arr
  }