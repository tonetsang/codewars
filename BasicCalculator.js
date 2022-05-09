function calculate(num1, operation, num2) {
    let operations = ['+', '-', '*', '/']
    if (!operations.includes(operation)) return null
    if (operation == '/' && num2 == 0) return null
    if (eval(`${num1}${operation}${num2}`) == -0) return 0
    return eval(`${num1}${operation}${num2}`)
  }