function solve(arr){
  arr = arr.sort((a,b) => b-a)
  let length = arr.slice().length
  const arr1 = []
  for(let i = 0; i < length; i++){
    arr1.push(arr.shift())
    arr1.push(arr.pop())
  }
  return arr1.filter(x => x != undefined)
};