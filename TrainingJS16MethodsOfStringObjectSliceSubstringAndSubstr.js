function cutIt(arr){
    let shortest = Math.min(...arr.map(str => str.length))
    return arr.map(str => str.slice(0, shortest))
  }