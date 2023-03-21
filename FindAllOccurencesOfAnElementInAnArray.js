const findAll = (array, n) => {
    let indexes = []
    for(let i = 0; i < array.length; i++){
      if(array[i] == n) indexes.push(i)
    }
    return indexes
}