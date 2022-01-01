function isVow(a){
    return a.map(v => v == 97 ? 'a' : v == 101 ? 'e' : v == 105 ? 'i' : v == 111 ? 'o' : v == 117 ? 'u' : v)
  }