function blackAndWhite(arr){
    return `It's a ${Array.isArray(arr) == false ? 'fake' : arr.includes(5) && arr.includes(13) ? 'black' : 'white'} array`
  }