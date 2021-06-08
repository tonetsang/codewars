function numberToPower(number, power){
    let num = 1
    for(let i = 1; i <= power; i++){
      num = num * number
    }
    return num
  }