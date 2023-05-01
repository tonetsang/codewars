function dbSort(a){
  let word = a.filter(w => typeof(w) == 'string').sort()
  let number = a.filter(n => typeof(n) == 'number').sort((a, b) => a - b)
  return number.concat(word)
}