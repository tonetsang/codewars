reverse = function(array) {
    let answer = []
    while (array.length){
      answer.push(array.pop())
    }
    return answer
  }