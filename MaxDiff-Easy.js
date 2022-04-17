function maxDiff(list) {
    return list.length == 0 || list.length == 1 ? 0 : Math.max(...list) - Math.min(...list)
  }