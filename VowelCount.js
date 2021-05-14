function getCount(str) {
    let s = str.split('')
    return s.filter(a => a === 'a' ||  a === 'e' ||  a === 'i' ||  a === 'o' ||  a === 'u').length
  }