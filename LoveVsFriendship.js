function wordsToMarks(string){
    //your code here
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'
    let answer = 0
    for (let i = 0; i < string.length; i++) {
      answer += (alphabet.indexOf(string[i]) + 1)
    }
    return answer
  }