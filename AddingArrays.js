function arrAdder(arr) {
    let ans = ''
    for(let i = 0; i < arr[0].length; i++){
      for(let j = 0; j < arr.length; j++){
        ans += arr[j][i]
      }
      ans += ' '
    }
    return ans.trim()
  }