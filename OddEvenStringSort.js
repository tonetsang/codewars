function sortMyString(S) {
    let even = S.split('').filter((x, y) => y % 2 == 0).join('')
    let odd = S.split('').filter((x, y) => y % 2 !== 0).join('')
    return `${even} ${odd}`
  }