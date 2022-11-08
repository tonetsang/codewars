var paintLetterboxes = function(start, end) {
    let arr = [0,0,0,0,0,0,0,0,0,0]
    for (let i = start; i <= end; i++){
      for (let n of (String(i))){
        arr[n]++
      }
    }
    return arr
  }