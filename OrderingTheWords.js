function orderWord(s){
    return s == null || s == '' ? 'Invalid String!' : s.split('').sort().join('')
  }