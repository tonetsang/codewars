function bump(x){
    let bumps = x.split('').filter(bump => bump == 'n')
    return bumps.length > 15 ? 'Car Dead' : 'Woohoo!'
  }