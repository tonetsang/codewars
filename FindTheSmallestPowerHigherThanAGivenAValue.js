function findNextPower(val, pow_) {
    if(val == 1) return 2 ** pow_
    for(let i = 0; i <= val; i++){
      if(i ** pow_ > val){
        return i ** pow_
      }
    }
  }