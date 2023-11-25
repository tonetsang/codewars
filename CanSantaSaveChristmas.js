function determineTime (durations) {
    let hrs = 0
    let min = 0
    let sec = 0
    durations.map(x => x.split(':').map((v, i) => i == 0 ? hrs += v * 1 : i == 1 ? min += v * 1 : sec += v * 1))
    min += sec / 60
    hrs += min / 60
    return hrs <= 24
  }