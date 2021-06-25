function points(games) {
    return games.reduce((p, game) => {
      let [x,y] = game.split(':').map(Number)
      if(x>y) {
        p += 3
      }else if(x==y) {
        p += 1
      }
      return p
      }, 0)
  }