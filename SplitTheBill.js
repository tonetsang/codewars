function splitTheBill(x) {
    let members = Object.keys(x)
    let average = Object.values(x).reduce((a, b) => a + b) / Object.values(x).length
    let finalValues = Object.values(x).map((a, b) => a - average)
    
    return Object.assign(...members.map((m, k) => ({[m]: parseFloat((finalValues[k]).toFixed(2))})))
  }