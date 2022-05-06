function capital(capitals){
    return capitals.map(x => `The capital of ${x.state || x.country} is ${x.capital}`)
  }