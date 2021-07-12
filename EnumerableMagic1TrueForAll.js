function all( arr, fun ){
    return fun(...arr) == true ? fun(arr) : fun(arr) == fun(arr)
  }