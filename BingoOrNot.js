function bingo(a) {
    return [2, 9, 14, 7, 15].every(value => a.includes(value)) ? 'WIN' : 'LOSE'
  }