function capitalize(s){
    let first = ''
    for (let x in s.split('')) {
      x % 2 == 0 ? first = first + s[x].toUpperCase() : first = first + s[x].toLowerCase()
    }
    let sec = ''
    for (let x in s.split('')) {
      x % 2 == 0 ? sec = sec + s[x].toLowerCase() : sec = sec + s[x].toUpperCase()
    }
    return [first, sec]
  };