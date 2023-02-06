function whoseBicycle(diary1, diary2, diary3) {
  let d1 = Object.values(diary1).reduce((a, b) => a + b, 0)
  let d2 = Object.values(diary2).reduce((a, b) => a + b, 0)
  let d3 = Object.values(diary3).reduce((a, b) => a + b, 0)
  if(d1 > d2 && d1 > d3) return 'I need to buy a bicycle for my first son.'
  if(d2 > d1 && d2 > d3) return 'I need to buy a bicycle for my second son.'
  return 'I need to buy a bicycle for my third son.'
}