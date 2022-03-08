function solve(arr) {
    let newArr = []
    while(arr.length > 0){
      let removed = arr.pop()
      if (!newArr.includes(removed)){
        newArr.unshift(removed)
      }
    }
    return newArr
  }