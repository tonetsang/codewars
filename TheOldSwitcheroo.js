function vowel2index(str) {
    return str.replace(/[aeiou]/gi, (x, y) => y + 1)
 }