function divCon(x){
    let int = x.filter(x => typeof(x) == 'number')
    let str = x.filter(y => typeof(y) == 'string')
    return int.length == 0 ? 0 - str.reduce((a, b) => Number(a) + Number(b)) : 
      str.length == 0 ? int.reduce((a, b) => a + b) - 0 : 
      int.reduce((a, b) => a + b) - str.reduce((a, b) => Number(a) + Number(b))
  }