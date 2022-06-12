var findDigit = function(num, nth){
    if(nth <= 0) return -1
    num = Math.abs(num).toString()
    return num.slice(num.length - nth, num.length - nth + 1) * 1
  }