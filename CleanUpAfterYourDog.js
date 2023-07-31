function crap(x, bags, cap){
  let dog = 0
  let crap = 0
  x.map(x => x.map(y => y == '@' ? crap += 1 : y == 'D' ? dog += 1 : y))
  if(dog > 0) return 'Dog!!'
  return crap > (bags * cap) ? 'Cr@p' : 'Clean'
}