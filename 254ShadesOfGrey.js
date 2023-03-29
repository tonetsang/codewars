function shadesOfGrey(n){
  let arr = []
  for (let i = 1; i <= Math.min(n, 254); i++) {
    let grey = ('0' + i.toString(16)).slice(-2)
    arr.push('#' + grey + grey + grey)
  } 
  return arr
}