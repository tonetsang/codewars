function password(str) {
  let upper = str.match(/[A-Z]/)
  let lower = str.match(/[a-z]/)
  let num = str.match(/[0-9]/)
  let length = str.length >= 8
  return upper && lower && num && length ? true : false
}