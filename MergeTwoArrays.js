function mergeArrays(a, b) {
  let length = Math.max(a.length, b.length)
  let arr = []
  for (let i = 0; i < length; i++){
    arr.push(a[i])
    arr.push(b[i])
  }
  return arr.filter(x => x != undefined)
}