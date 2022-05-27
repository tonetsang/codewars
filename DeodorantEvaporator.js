function evaporator(content, evap_per_day, threshold){ 
    let days = 0,
        percent = 100
    while(percent > threshold){
      percent = percent - percent * (evap_per_day / 100)
      days += 1
    }
    return days
  }