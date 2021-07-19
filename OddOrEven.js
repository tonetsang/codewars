function oddOrEven(array) {
    if(array.length == 0){
      return 'even'
    }else{
     return Math.abs(array.reduce((a,b) => a + b)) % 2 == 0 ? 'even' : 'odd'
    }
  }