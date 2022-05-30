var isMonotone = function(arr){
    return arr.every((x, y) => y == 0 || arr[y] >= arr[y - 1])
  }