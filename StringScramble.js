function scramble(str, arr) {
    let array = []
    for(let i = 0; i < arr.length; i++){
      array[arr[i]] = str[i]
    }
    return array.join('')
  };