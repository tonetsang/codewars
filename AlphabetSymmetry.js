function solve(arr) {
    return arr.map(function(input) {
      let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
      let arr = input.toLowerCase().split('')
      let sum = 0
      arr.forEach(function(val, i) {
        if(val === alphabet[i])
          sum++
      })
      return sum
    })
  }