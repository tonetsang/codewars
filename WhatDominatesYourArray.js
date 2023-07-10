function dominator(arr) {
  let obj = {}
  arr.map(x => obj[x] = obj[x] ? obj[x] + 1 : 1)
  let keys = Object.keys(obj)
  let values = Object.values(obj)
  if(Math.max(...values) < (arr.length / 2)) return -1
  return values.indexOf(Math.max(...values)) == 0 ? -1 : keys[values.indexOf(Math.max(...values))] * 1
}