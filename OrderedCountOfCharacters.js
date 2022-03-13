var orderedCount = function (text) {
    let letters = text.split('').filter((letter, index) => text.indexOf(letter) == index)
    return letters.map((letter) => [letter, text.split(letter).length - 1])
  }