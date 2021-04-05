var humanYearsCatYearsDogYears = function(humanYears) {
    let arr = []
    if(humanYears === 1){
      arr.push(humanYears)
      arr.push(humanYears * 15)
      arr.push(humanYears * 15)
    }else if(humanYears === 2){
      arr.push(humanYears)
      arr.push(24 + humanYears * 4 - 8)
      arr.push(24 + humanYears * 5 - 10)
    }else if(humanYears >= 3){
      arr.push(humanYears)
      arr.push(24 + humanYears * 4 - 8)
      arr.push(24 + humanYears * 5 - 10)
    }
    return arr
  }