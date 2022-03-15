function menFromBoys(arr){
    let even = arr.filter(x => x % 2 == 0).sort((a, b) => a - b).filter((item,index,arr) => (arr.indexOf(item) === index))
    let odd = arr.filter(y => y % 2 !== 0).sort((a, b) => a - b).filter((item,index,arr) => (arr.indexOf(item) === index)).reverse()
    return even.concat(odd)
  }