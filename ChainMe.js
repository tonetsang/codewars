function chain(input, fs) {
    return fs.reduce(function(input, fn){ 
      return fn(input) 
    }, input)
  }