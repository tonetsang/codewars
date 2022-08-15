function charFreq(message) {
    let letterCount = {};
    [...message].forEach( x => letterCount[x] ? letterCount[x]++ : letterCount[x] = 1)
    return letterCount
  }