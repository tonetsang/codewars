function firstToLast(str,c){
    let first = str.indexOf(c)
    let last = str.lastIndexOf(c)
    if(str.search(c) == -1) return -1
    return last - first
  }