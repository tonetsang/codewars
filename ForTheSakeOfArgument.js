function numbers(...args){
    return args.every(x => typeof x == 'number')
  }