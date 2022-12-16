function evenOrOdd(str) {
    let even = str.split('').filter(even => even % 2 == 0).reduce((a, b) => a + b * 1, 0)
    let odd = str.split('').filter(odd => odd % 2 != 0).reduce((a, b) => a + b * 1, 0)
    return even > odd ? 'Even is greater than Odd' : odd > even ? 'Odd is greater than Even' : 'Even and Odd are the same'
  }