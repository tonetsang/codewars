function moveTen(s){
  let alphabet = 'abcdefghijklmnopqrstuvwxyzabcdefghij'
  let moved = s.split('').map(x => x = alphabet.indexOf(x) + 10)
  return moved.map(y => y = alphabet[y]).join('')
}