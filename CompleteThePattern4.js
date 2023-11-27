function pattern(n){
    var output = "", number = ''
    while(n > 0) {
      number = n + number
      output = number + (output ? '\n' : '') + output
      n--
    }
    return output;
  }