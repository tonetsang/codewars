function filter_list(l) {
    return l.filter(el => {return typeof el !== 'string'})
  }