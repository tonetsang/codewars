function yearDays(year){
    if(year == 0) return '0 has 366 days'
    return `${year} has ${year % 100 == 0 ? 365 : year % 4 == 0 || year % 400 == 0 ? 366 : 365} days`
  }