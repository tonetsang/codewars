function startingMark(bodyHeight){
    // Remember: Body height of 1.52 m --> starting mark: 9.45 m
    //           Body height of 1.83 m --> starting mark: 10.67 m
    // All other starting marks are based on these guidelines!
    let constant = (10.67 - 9.45) / (1.83 - 1.52)
    return +(((constant * bodyHeight + 10.67 - constant * 1.83) * 100) / 100).toFixed(2)
  }