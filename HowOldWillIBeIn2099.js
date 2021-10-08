function calculateAge(yearBorn, askingYear) {
    if(askingYear - yearBorn == 1) {
      return `You are ${askingYear - yearBorn} year old.`
    }else if(yearBorn - askingYear == 1) {
      return `You will be born in ${yearBorn - askingYear} year.`
    }else if(yearBorn < askingYear) {
      return `You are ${askingYear - yearBorn} years old.`
    }else if(yearBorn > askingYear) {
      return `You will be born in ${yearBorn - askingYear} years.`
    } 
    else return `You were born this very year!`
  }