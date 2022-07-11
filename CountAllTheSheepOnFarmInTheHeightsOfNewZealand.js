function lostSheep(friday,saturday,total){
    return friday.length == 0 && saturday.length == 0 ? total : 
      friday.length == 0 ? total - saturday.reduce((a, b) => a + b) : 
      saturday.length == 0 ? total - friday.reduce((a, b) => a + b) : 
      total - friday.reduce((a, b) => a + b) - saturday.reduce((a, b) => a + b)
  }