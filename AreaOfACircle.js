var circleArea = function(radius) {
    if(radius <= 0 || radius !== Number(radius)) return false
    return Number((Math.PI * (radius**2)).toFixed(2))
  };