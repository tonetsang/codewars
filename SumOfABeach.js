function sumOfABeach(beach) {
  return beach.match(/sand|water|fish|sun/gi) == null ? 0 : beach.match(/sand|water|fish|sun/gi).length
}