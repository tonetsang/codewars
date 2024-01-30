function reverseByCenter(s){
    let half = s.length / 2
    return s.slice(Math.ceil(half)) + s.slice(Math.floor(half), Math.ceil(half)) + s.slice(0, Math.floor(half))
  }