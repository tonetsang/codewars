const prevMultOfThree = n => {
  if(n == 0) return null
  if(n % 3 == 0) return n
  return prevMultOfThree(+n.toString().slice(0, -1))
}