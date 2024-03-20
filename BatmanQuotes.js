var getQuote = function(quotes, hero){
    return `${{B: 'Batman', R: 'Robin', J: 'Joker'}[hero[0]]}: ${quotes[hero.match(/\d+/)[0]]}`
  }