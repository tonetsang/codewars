function longest(s1, s2) {
    return require('lodash').uniq(s1 + s2).sort().join('')
  }