function whoIsPaying(name){
    return name.length == 0 || name.length == 1 || name.length == 2 ? [name] : [name, name.split('').splice(0, 2).join('')]
  }