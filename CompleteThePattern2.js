function pattern(n){
    var output = '', number = ''
    while (n > 0) {
     number = number + n
     output = number + (output ? '\n' : '') + output
     n--
   }
   return output
  }