function pyramid(balls) {
    let level = 0
    while(balls > level){
      level += 1  
      balls -= level
    }
    return level
}