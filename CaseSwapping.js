function swap(str){
    return str.split('').map(x => {
      if(x == x.toUpperCase()) return x.toLowerCase()
      if(x == x.toLowerCase()) return x.toUpperCase()
    }).join('')
  }