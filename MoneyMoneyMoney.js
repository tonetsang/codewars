function calculateYears(principal, interest, tax, desired) {
    let years = 0
    while (principal < desired){
      years = years + 1
      let totalInterest = principal * interest
      let interestTax = totalInterest * tax
      principal = principal + (totalInterest - interestTax)    
    }
    return years
  }