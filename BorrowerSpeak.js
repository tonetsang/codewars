function borrow(s){
    return s.toLowerCase().replace(/[^\w\s]/gi, '').split(' ').join('')
  }