const sequenceSum = (begin, end, step) => {
    let arr = []
    for(let i = begin; i <= end; i += step){
      arr.push(i)
    }
    return arr <= 0 ? 0 : arr.reduce((a,b) => a + b)
  }