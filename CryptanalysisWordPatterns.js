function wordPattern(word) {
    word = word.toLowerCase().split('')
    let letter = ''
    let arr = []
    let count = 0
    
    for (var i = 0; i < word.length; i++){
      if (letter.includes(word[i])){
        arr.push(letter.indexOf(word[i]))
      } 
      else {
        letter += word[i]
        arr.push(count)
        count++
      }
    }
    return arr.join('.')
  }