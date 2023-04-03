function trim(str, size) {
  return str.length > size ? str.slice(0, size <= 3 ? size : size - 3) + '...' : str
}