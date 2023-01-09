function scale(strng, k, n) {
  return strng.split('\n').map(x => x.split('').map(y => y.repeat(k)).join(''))
    .map(z => (z + ' ').repeat(n)).map(a => a.trim().replace(/ /g, '\n')).join('\n')
}