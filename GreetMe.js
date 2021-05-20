var greet = function(name) {
    const lower = name.toLowerCase().split('')
    const newName = lower[0].toUpperCase() + lower.slice(1).join('')
    return `Hello ${newName}!`
  }