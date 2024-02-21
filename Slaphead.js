function bald(x){
    let removed = '-'.repeat(x.split('').length)
    let stray = x.split('').filter(x => x == '/').length
    return [ removed, stray == 0 ? 'Clean!' : stray == 1 ? 'Unicorn!' : stray == 2 ? 'Homer!' : stray <= 5 ? 'Careless!' : 'Hobo!' ]
  }