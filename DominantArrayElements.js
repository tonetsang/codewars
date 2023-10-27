function solve(arr) {
    let answer = [arr[arr.length - 1]]
    let pointer = arr.length - 1
    for(let i = arr.length - 2; i >= 0; i--){
      if(arr[i] > arr[pointer]) {
        answer.unshift(arr[i])
        pointer = i
      }
    }
    return answer
  }