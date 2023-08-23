function eliminateUnsetBits(number) {
    return number.split('').every(x => x != 1) ? 0 : 
      parseInt(number.split('').filter(x => x == 1).join(''), 2)
}