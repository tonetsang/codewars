var seqlist = function(first,c,l){
  let arr = []
  for(let i = 0; i < l; i++){
    arr.push(first + c * i)
  }
  return arr
}