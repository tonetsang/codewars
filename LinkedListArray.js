function listToArray(list) {
  let current = list
  let arr = []
  while(current) {
    arr.push(current.value)
    current = current.next
  }
  return arr
}