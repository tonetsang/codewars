function numObj(s){
  let arr = []
  s.map(letter => arr.push(String.fromCharCode(letter)))
  let obj = Array.from({length : s.length}, x => x = {})
  obj.map((v, i) => v[s[i]] = arr[i])
  return obj
}