function rpsls(pl1,pl2){
    if(pl1 == pl2) return 'Draw!'
    return  pl1 == 'scissors' && pl2 == 'paper' ||
            pl1 == 'paper' && pl2 == 'rock' ||
            pl1 == 'rock' && pl2 == 'lizard' ||
            pl1 == 'lizard' && pl2 == 'spock' ||
            pl1 == 'spock' && pl2 == 'scissors' ||
            pl1 == 'scissors' && pl2 == 'lizard' ||
            pl1 == 'lizard' && pl2 == 'paper' ||
            pl1 == 'paper' && pl2 == 'spock' ||
            pl1 == 'spock' && pl2 == 'rock' ||
            pl1 == 'rock' && pl2 == 'scissors'
            ? 'Player 1 Won!' : 'Player 2 Won!'
  }