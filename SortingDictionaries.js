function sortDict(dict) {
  return Object.keys(dict)
    .map(x => [isNaN(x) ? x : Number(x), dict[x]])
    .sort((a, b) => b[1] - a[1]) 
}