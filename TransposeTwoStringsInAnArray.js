function transposeTwoStrings (array) {
	let arr = []
  for (let i = 0; i < Math.max(array[0].length, array[1].length); i++) {
    arr.push(`${array[0][i] || " "} ${array[1][i] || " "}`)
  }
  return arr.join('\n')
}