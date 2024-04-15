function completeSeries(arr) {
    if(arr.some(x => arr.indexOf(x) != arr.lastIndexOf(x)) == true) return [0]
    arr = arr.sort((a, b) => a - b)
    let answer = []
    for(let i = 0; i <= arr[arr.length - 1]; i++){
      answer.push(i)
    }
    return answer
  }