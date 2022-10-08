function solve(a,b){
    let ay = a.split('').filter(x => !b.split('').includes(x)).join('')
    let be = b.split('').filter(x => !a.split('').includes(x)).join('')
    return ay + be
  };