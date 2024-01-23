function giveChange(amount) {
    let bills = [100, 50, 20, 10, 5, 1]
    return bills.map(x => ([x, amount] = [Math.floor(amount / x), amount % x])[0]).reverse()
  }