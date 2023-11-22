const generate = length => {
    let string = ''
    for(let i = 0; i < length; i++){
      string += Math.round(Math.random())
    }
    return string
  };