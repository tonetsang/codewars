function switcher(x){
    return x.map(a => {if(a == '29'){
      return ' '
    }else if(a == '28'){
      return '?'
    }else if(a == '27'){
      return '!'
    }else if(a == '26'){
      return 'a'
    }else if(a == '25'){
      return 'b'
    }else if(a == '24'){
      return 'c'
    }else if(a == '23'){
      return 'd'
    }else if(a == '22'){
      return 'e'
    }else if(a == '21'){
      return 'f'
    }else if(a == '20'){
      return 'g'
    }else if(a == '19'){
      return 'h'
    }else if(a == '18'){
      return 'i'
    }else if(a == '17'){
      return 'j'
    }else if(a == '16'){
      return 'k'
    }else if(a == '15'){
      return 'l'
    }else if(a == '14'){
      return 'm'
    }else if(a == '13'){
      return 'n'
    }else if(a == '12'){
      return 'o'
    }else if(a == '11'){
      return 'p'
    }else if(a == '10'){
      return 'q'
    }else if(a == '9'){
      return 'r'
    }else if(a == '8'){
      return 's'
    }else if(a == '7'){
      return 't'
    }else if(a == '6'){
      return 'u'
    }else if(a == '5'){
      return 'v'
    }else if(a == '4'){
      return 'w'
    }else if(a == '3'){
      return 'x'
    }else if(a == '2'){
      return 'y'
    }else if(a == '1'){
      return 'z'
    }
    }).join('')
  }