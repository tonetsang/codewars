function alienLanguage(str){
    let split = str.toUpperCase().split(' ')
    return split.map(a => a.slice(a, a.length-1) + a[a.length-1].toLowerCase()).join(' ')
  }