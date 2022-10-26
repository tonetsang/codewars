function findScreenHeight(width, ratio) {
    ratio = ratio.split(':')
    let height = width / ratio[0] * ratio[1]
    return `${width}x${height}`
  }