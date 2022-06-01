function averages(numbers) {
    if(!numbers) return []
    let answer = []
    for(let i = 0; i <= numbers.length - 2; i++){
      answer.push((numbers[i] + numbers[i + 1]) / 2)
    }
    return answer
  }