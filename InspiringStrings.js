function longestWord(stringOfWords){
  return stringOfWords.split(' ').sort((a, b) => a.length - b.length).slice(-1).toString()
}