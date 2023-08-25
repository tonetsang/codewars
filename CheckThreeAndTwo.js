function checkThreeAndTwo(array) {
  let a = array.filter(x => x == 'a').length
  let b = array.filter(y => y == 'b').length
  let c = array.filter(z => z == 'c').length
  return (a == 3 || b == 3 || c == 3) && (a == 2 || b == 2 || c == 2)
}