function strCount(str, letter){  
    let count = 0
    for(let x of str.split('')) {
      if(x == letter) {
        count += 1
      }
    }
    return count
  }