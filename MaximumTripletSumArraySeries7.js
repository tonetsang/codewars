function maxTriSum(numbers){
    return numbers.sort((a, b) => a - b)
      .reverse()
      .filter((item,index,arr) => (arr.indexOf(item) === index))
      .slice(0, 3)
      .reduce((a, b) => a + b)
  }