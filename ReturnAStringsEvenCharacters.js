function evenChars(string) {
    if (string.length < 2 || string.length > 99) return 'invalid string'
    return [...string].map((x, y) => y % 2 !== 0 ? x : 'butt').filter(x => x !== 'butt')
  }