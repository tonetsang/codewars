function isolateIt(arr){
    return arr.map(x => 
      x.length % 2 == 0 ? x.slice(0, x.length / 2) + '|' + x.slice(x.length / 2) : 
                          x.slice(0, x.length / 2) + '|' + x.slice((x.length / 2) + 1)
    )
  }