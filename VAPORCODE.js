function vaporcode(string) {
    return string.split('').filter(x => x == String(x).trim()).map(y => y.toUpperCase()).join('  ')
  }