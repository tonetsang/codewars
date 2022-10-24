function wordSearch(query, seq){
    let arr = seq.filter(x => new RegExp(query, 'i').test(x))
    if(arr.length == 0) return ['Empty']
    return arr
  }