function womensAge(n) {
    let age = 20 + n % 2
    let base = Math.floor(n / 2)
    return `${n}? That's just ${age}, in base ${base}!`
  }