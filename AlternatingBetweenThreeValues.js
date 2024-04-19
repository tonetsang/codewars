function f(x, cc) { 
    let arr = Object.values(cc)
    for(let i = 0; i < arr.length; i++){
      if(arr[i] == x) return arr[i + 1] || arr[0]
    }
  }