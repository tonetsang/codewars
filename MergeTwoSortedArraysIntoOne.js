function mergeArrays(arr1, arr2) {
    return arr1.concat(arr2).sort((a,b) => a - b).filter(function(elem, index, self) {
      return index == self.indexOf(elem);
      })
  }