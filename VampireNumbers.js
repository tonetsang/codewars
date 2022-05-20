var vampire_test = function(a, b){
    return (a * b).toString().split('').sort().join('') == a.toString().concat(b.toString()).split('').sort().join('')
  }