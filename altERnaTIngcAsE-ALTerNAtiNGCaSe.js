String.prototype.toAlternatingCase = function () {
    let str = ''
    for(let i = 0; i < this.length; i++) {
      if(this[i] == this[i].toUpperCase()) {
        str += this[i].toLowerCase()
      }else {
        str += this[i].toUpperCase()
      }
    }
    return str
  }