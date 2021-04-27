function bmi(weight, height) {
    let bawdy = weight / height ** 2
    if(bawdy <= 18.5) {
      return "Underweight"
    }else if(bawdy <= 25) {
      return "Normal"
    }else if(bawdy <= 30) {
      return "Overweight"
    }else if(bawdy > 30) {
      return "Obese"
    }
  }