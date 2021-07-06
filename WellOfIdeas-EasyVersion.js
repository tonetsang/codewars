function well(x){
    return x.filter(el => el == 'good').length == 0 ? 'Fail!' : x.filter(el => el == 'good').length <= 2 ? 'Publish!' : 'I smell a series!'
  }