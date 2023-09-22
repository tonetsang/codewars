var calculate = function calculate(a, o, b) {
    let operations = ['+', '-', '*', '/']
    if (!operations.includes(o)) return null
    if (o == '/' && b == 0) return null
    if (eval(`${a}${o}${b}`) == -0) return 0
    return eval(`${a}${o}${b}`)
}