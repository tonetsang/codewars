function dateNbDays(a0, a, p) {
    return new Date(2016, 0, Math.ceil(Math.log(a / a0) / Math.log(p / 36000 + 1)) + 1).toISOString().slice(0, 10)
  }