function reduce(fraction) {
    let gcd = (numerator, denominator) =>
      denominator ? gcd(denominator, numerator % denominator) : numerator
    return fraction.map(x => x / gcd(...fraction))
  }