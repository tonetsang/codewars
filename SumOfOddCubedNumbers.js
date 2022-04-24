function cubeOdd(arr) {
    return !arr.every(x => typeof x == 'number') ? undefined : arr.map(cube => cube ** 3).filter(odd => odd % 2 !== 0).reduce((total, value) => total + value, 0)
  }