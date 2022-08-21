function howMuchWater(water, load, clothes){
    if(load * 2 <= clothes) {
      return 'Too much clothes'
    }else if(load > clothes) {
      return 'Not enough clothes'
    }else {
      return Number((water * 1.1 ** (clothes - load)).toFixed(2))    
    }
  }