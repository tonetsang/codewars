function lowercaseCount(str){
    let count = 0
    for(let i = 0; i < str.length; i++) {
      if (/[a-z]+/.test(str[i])) {
        count += 1
      }
    }
    return count
  }