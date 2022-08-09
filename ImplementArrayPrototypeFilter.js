Array.prototype.filter = function (func) {
    let answer = []
    for (let i = 0; i < this.length; i++) {
      if(func(this[i])) answer.push(this[i])
    }
    return answer
  }