function keysAndValues(data){
    let keys = Object.getOwnPropertyNames(data)
    let vals = keys.map(function (key) { return data[key]; })
    return [keys, vals]
  }