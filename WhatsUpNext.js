function nextItem(xs, item) {
    xs = xs[Symbol.iterator]()
    for(let initial of xs){
      if(initial == item) return xs.next().value
    }   
  }