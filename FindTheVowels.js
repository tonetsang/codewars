function vowelIndices(word){
    let arr = []
    word = word.split('')
    for (let i = 0; i < word.length; i++){
    if(/[aeuoiy]/gi.test(word[i])) {arr.push(i + 1)}
    }
    return arr
  }