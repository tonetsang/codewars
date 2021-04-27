function hero(bullets, dragons){
    let survive = bullets / dragons >= 2
    return survive ? true : false
  }