function filterHomogenous(arrays) {
  return arrays.filter(x => x.every((v, i, arr) => typeof v == typeof arr[0]))
    .filter(y => y.length != 0)
}