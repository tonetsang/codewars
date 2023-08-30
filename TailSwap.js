function tailSwap(arr) {
  let ans = []
  let swap = []
  arr.map(x => x.split(':').map((x, y, z) => y % 2 == 0 ? ans.push(x) : swap.push(x)))
  swap = swap.reverse()
  ans = ans.map((x, y) => x + ':' + swap[y])
  return ans
}