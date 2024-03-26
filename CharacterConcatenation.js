function charConcat(string){
    let arr = []
    string.split('')
    for(let i = 1; i <= string.length / 2; i++){
      arr.push(string[i - 1])
      arr.push(string[string.length - i])
      arr.push(i)
    }
    return arr.join('')
  }