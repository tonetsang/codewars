function passed (list) {
    list = list.filter(x => x <= 18)
    return  list.length == 0 ? 'No pass scores registered.' : 
            Math.round(list.reduce((a, b) => a + b) / list.length)
  } 