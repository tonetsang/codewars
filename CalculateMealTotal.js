function calculate_total(subtotal, tax, tip) { 
    tax = tax / 100
    tip = subtotal * (tip / 100)
    let total = subtotal + subtotal * tax
    return (total + tip).toFixed(2) * 1
  }