function evenNumbers(array, number) {
  let evenNums = array.filter(x => x % 2 == 0)
  return evenNums.splice(evenNums.length - number, number)
}