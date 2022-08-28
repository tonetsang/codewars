//return price without vat
function excludingVatPrice(price){
    return price == undefined ? -1 : +((price / 1.15).toFixed(2)) 
  }