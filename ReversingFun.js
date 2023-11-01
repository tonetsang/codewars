function flipNumber(n){
    let answer = ''
    let length = n.length
    n = n.split('')
    for(let i = 1; i <= length; i++){
      n.reverse()
      answer += n[0]
      n.shift()
    }
    return answer
  }