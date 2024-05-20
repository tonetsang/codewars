function reverseAndMirror(s1,s2) {
    let reverseInverted = s2.split('').reverse().join('').replace(/[a-zA-Z]/g, x => x == x.toLowerCase() ? x.toUpperCase() : x.toLowerCase())
    let reverseInverted2 = s1.split('').reverse().join('').replace(/[a-zA-Z]/g, x => x == x.toLowerCase() ? x.toUpperCase() : x.toLowerCase())
    let mirrored = s1.replace(/[a-zA-Z]/g, x => x == x.toLowerCase() ? x.toUpperCase() : x.toLowerCase())
  
    return `${reverseInverted}@@@${reverseInverted2}${mirrored}`
  }