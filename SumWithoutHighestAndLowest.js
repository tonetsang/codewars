function sumArray(array) {
    if(array && array.length > 1) {
      return array.sort((a,b)=>a-b).reduce((a,b)=>a+b) - (array[0] + array[array.length-1])
    }else{
      return 0
    }
  }