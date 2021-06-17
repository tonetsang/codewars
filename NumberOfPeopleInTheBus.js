var number = function(busStops){
    return busStops.map(r=>r[0]-r[1]).reduce((a,b)=>a+b)
  }