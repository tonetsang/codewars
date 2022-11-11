function combine(...args) {
    let total = {}
    for(let i = 0; i < args.length; i++){
      let object = args[i]
      for(let key in object){
        if(total[key]){
          total[key] += object[key]
        }
        else total[key] = object[key]      
      }   
    }
    return total
  }