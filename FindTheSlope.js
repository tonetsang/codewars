function slope(points){
    let result = (points[3] - points[1]) / (points[2] - points[0])
    return isFinite(result) ? `${result}` : 'undefined'
  }