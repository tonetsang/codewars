function lastDigit(n, d) {
    return d > n.length ? n.split('').map(Number) : d <= 0 ? [] : n.toString().split('').map(Number).slice(-d)
}