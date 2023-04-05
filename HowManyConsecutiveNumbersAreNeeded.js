function consecutive(arr) {
  let newArr = []
  arr.sort((a, b) => a - b)
  for(let i = arr[0]; i <= arr[arr.length - 1]; i++){
    newArr.push(i)
  }
  return newArr.length - arr.length
}