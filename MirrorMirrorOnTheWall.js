function mirror(data) {
    let sorted = data.slice().sort((a, b) => a - b)
    let reverse = data.slice().sort((a, b) => a - b).reverse().slice(1)
    return [...sorted, ...reverse] 
  }