function threeInOne(arr){
    let ans = []
    for(let i = 0; i <= arr.length; i += 3){
      ans.push(arr.slice(i, i + 3))
    }
    return ans.map(x => x.reduce((a, b) => a + b, 0)).slice(0, -1)
  }