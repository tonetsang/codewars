const ultimateReverse = s => {
    let reverse = s.join('').split('').reverse()
    let arr = []
    for(let i = 0; i < s.length; i++){
      arr.push(reverse.splice(0, s[i].length).join(''))
    }
    return arr
  };