function getSum( a,b ) {
    if(a > b){
      return (a - b + 1) * (b + a) / 2
    }else{
      return (b - a + 1) * (a + b) / 2
    }
  }