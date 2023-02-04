function consonantCount(str) {
  return str.split('').filter(x => /[bcdfghjklmnpqrstvwxyz]/gi.test(x)).length
}