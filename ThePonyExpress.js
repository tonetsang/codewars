function riders(stations) {
    return stations.reduce(([previousStation,riders],currentValue)=>previousStation+currentValue > 100 ? 
                           [currentValue, ++riders] : [previousStation + currentValue, riders], [0,1])[1]
  }