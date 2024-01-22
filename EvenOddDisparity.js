function solve(a){
    let even = a.filter(x => x % 2 == 0).length
    let odd = a.filter(y => y % 2 != 0 && typeof y == 'number').length
    return even - odd
  };