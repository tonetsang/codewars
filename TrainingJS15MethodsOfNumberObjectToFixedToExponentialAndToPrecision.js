function howManySmaller(arr,n){
    return arr.filter(num => Number(num.toFixed(2)) < n).length
  }