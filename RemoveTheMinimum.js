function removeSmallest(numbers) {
    let slice = numbers.slice(0)
    slice.splice(numbers.indexOf(Math.min(...numbers)), 1)
    return slice
  }