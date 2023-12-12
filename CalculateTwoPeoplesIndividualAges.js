function getAges(sum,difference){
    if (sum < 0 || difference < 0 || sum - difference < 0) return null
    let age1 = (sum - difference) / 2
    let age2 = sum - age1
    return age1 < age2 ? [age2, age1] : [age1, age2]
  };