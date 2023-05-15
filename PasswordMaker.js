function makePassword(phrase) {
  return phrase.split(' ')
    .map(x => x[0])
    .map(y => {
      if(y == 'i' || y == 'I') return '1'
      else if(y == 'o' || y == 'O') return '0'
      else if(y == 's' || y == 'S') return '5'
      else return y
    })
  .join('')
}