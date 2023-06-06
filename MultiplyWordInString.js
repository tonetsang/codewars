function modifyMultiply (str,loc,num) {
  return (str.split(' ')[loc].toString() + '-').repeat(num).slice(0, -1)
} 