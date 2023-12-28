function processData(data){
    return data.map(x => x.reduce((a, b) => a - b)).reduce((a, b) => a * b)
  }