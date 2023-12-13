function tArea(tStr) {
    return (tStr.split('.').filter(x => x == '\n').length - 2) ** 2 / 2
  }