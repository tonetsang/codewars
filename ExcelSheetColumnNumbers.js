function titleToNumber(title) {
    let sum = 0
    for(let i = 0; i < title.length; i++){
      sum = sum * 26 + title.charCodeAt(i) - 64
    }
    return sum
  }