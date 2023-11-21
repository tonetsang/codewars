function countConsonants(str) {
    return Array.from(new Set(str.replace(/[^a-z]/gi,'').toLowerCase().split('')))
                .join('').replace(/[aeiou]/gi,'').length
  }