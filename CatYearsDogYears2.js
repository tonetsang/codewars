var ownedCatAndDog = function(catYears, dogYears) {
    let getAge = (years, catOrDog) => years < 15 ? 0 : years < 24 ? 1 : 2 + (years - 24) / catOrDog
    return [Math.floor(getAge(catYears, 4)), Math.floor(getAge(dogYears, 5))]
  }