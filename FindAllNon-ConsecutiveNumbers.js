function allNonConsecutive (arr) {
  let answer = []
  for (let i = 0; i < arr.length - 1; i++){
    if(arr[i + 1] - 1 != arr[i]) answer.push( {i: i + 1, n: arr[i + 1]} )
  }
  return answer
}