function solve(s){
    return Math.max(...s.replace(/[^aeiuo]/gi,' ').split(' ').map(x => x = x.length))
  }