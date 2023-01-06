function swap (string) {
  return string.replace(/[aeuio]/gi, x => x.toUpperCase())
}