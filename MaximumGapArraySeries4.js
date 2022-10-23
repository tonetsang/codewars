function maxGap (numbers){
    return numbers
      .sort((a, b) => a - b)
      .slice(1)
      .map((x, i) => x - numbers[i])
      .reduce((a, b) => Math.max(a, b))
  }