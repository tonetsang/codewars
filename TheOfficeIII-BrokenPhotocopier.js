function broken(x){
    return x.split('').map(a => {if(a == '1'){
      return '0'
    }else if(a == '0'){
      return '1'
    }
    }).join('')
  }