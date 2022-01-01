function doTurn () {
    let turn = [rollDice(), move(), combat(), getCoins(), buyHealth(), printStatus()]
    return turn
  }