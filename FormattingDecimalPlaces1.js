function twoDecimalPlaces(number) {
    let arr = String(number).split('.')
    let decimal = arr[1].slice(0, 2)
    return Number(arr[0] + '.' + decimal)
  }