function isSantaClausable(obj) {
    return ['sayHoHoHo', 'distributeGifts', 'goDownTheChimney'].every(function(action) {
      return typeof obj[action] == 'function'
    })
  }