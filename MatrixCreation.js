function getMatrix(number) {
    let arr = []
    for(let i = 0; i < number; i++) arr.push(Array.from({length: number}, (x, y) => y == i ? 1 : 0))
    return arr
  } 