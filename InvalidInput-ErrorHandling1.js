function getCount(words) {
    let str = typeof words == 'string'
    return { 
      'vowels': str ? words.replace(/[^aeiou]/gi, '').length : 0, 
      'consonants': str ? words.replace(/[^bcdfghjklmnpqrstvwxyz]/gi, '').length : 0
    } 
  }