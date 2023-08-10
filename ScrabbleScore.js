function scrabbleScore(str){
  return str.toUpperCase().split('').reduce((a, b) => a + ($dict[b] || 0), 0)
}