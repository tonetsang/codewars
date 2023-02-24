function makeString(s){
  return s.split(' ').map(word => word.charAt(0)).join('')
}