function intRac(n, guess) {
    let count = 0
    while(true){
      count++
      let newGuess = Math.floor((guess + Math.floor(n / guess)) / 2)
        if(Math.abs(guess - newGuess) < 1)
        break
        guess = newGuess
    }
    return count
  }