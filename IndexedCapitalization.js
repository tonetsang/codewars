function capitalize(s,arr){
    return s.split('').map((el, ind) => arr.includes(ind) ? el.toUpperCase() : el).join('')
  };