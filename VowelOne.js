function vowelOne(s){
    return s.split('').map(x => /[aeiou]/i.test(x) ? '1' : '0').join('')
  }