function accum(s) {
	let newStr = ''
  let arr = []
  for (let i = 0; i < s.length; i++){
    newStr = s[i].repeat(i + 1)
    arr[i] = newStr;
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1).toLowerCase()
    }
  return arr.join('-')
}