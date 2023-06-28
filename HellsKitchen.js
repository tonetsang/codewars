function gordon(a){
  return a.toUpperCase().replaceAll('A', '@').replaceAll(/[eiou]/gi, '*').split(' ').join('!!!! ') + '!!!!'
}