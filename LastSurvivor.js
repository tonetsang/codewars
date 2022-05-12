function lastSurvivor(letters, coords) {
    if(letters.length < 2) return letters
    for(let i = 0; i < coords.length; i++) {
      coords[i] == 0 ? letters = letters.substring(1) :
      coords[i] == letters.length - 1 ? letters = letters.substring(0, letters.length - 1) :
      letters = letters.substring(0, coords[i]) + letters.substring(coords[i] + 1)
    }
    return letters
  }