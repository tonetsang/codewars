function greetDevelopers(list) {
    list.forEach(dev => dev.greeting = `Hi ${dev.firstName}, what do you like the most about ${dev.language}?`)
    return list
  }