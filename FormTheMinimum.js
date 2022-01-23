function minValue(values){
  let arr = [...new Set(values)]
  return parseInt(arr.sort((a,b) => a - b).join(''))
}