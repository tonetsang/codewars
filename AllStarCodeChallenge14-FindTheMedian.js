function median(array) {
    array.sort((a, b) => a - b)
    
    let sliced = array.slice(Math.floor(array.length / 2) - 1, Math.ceil(array.length / 2) + 1)
    
    return array.length % 2 == 0 ?  sliced.reduce((a, b) => a + b, 0) / sliced.length :
                                    array.slice(Math.floor(array.length / 2), Math.ceil(array.length / 2)) * 1
  }