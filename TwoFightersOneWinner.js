function declareWinner(fighter1, fighter2, firstAttacker) {
    let fighter1NumberOfAttacks = Math.ceil( fighter2.health / fighter1.damagePerAttack )
    let fighter2NumberOfAttacks = Math.ceil( fighter1.health / fighter2.damagePerAttack )
  
    if(fighter1NumberOfAttacks < fighter2NumberOfAttacks) return fighter1.name
  
    if(fighter2NumberOfAttacks < fighter1NumberOfAttacks) return fighter2.name
  
    return firstAttacker
  }