function generateShape(integer){
    let arr = []
    for(let i = 1; i <= integer; i++) {
      arr.push('+'.repeat(integer))
    }
    return arr.join('\n')
  }