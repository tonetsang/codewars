function abbrevName(name){
    return name.split(' ').map(x => x[0]).join('.').toUpperCase()
  }