function hydrate(s) {
    return s.match(/\d+/g).reduce((acc, val) => acc + parseInt(val), 0) == 1 ? 
      s.match(/\d+/g).reduce((acc, val) => acc + parseInt(val), 0) + ' glass of water' : 
      s.match(/\d+/g).reduce((acc, val) => acc + parseInt(val), 0) + ' glasses of water'
  }