function wordValue(a) {
    return a.map(x => x.replace(/\ /gi,'').split('').map(x => x.charCodeAt(0) - 96).reduce((a, b) => a + b, 0))
            .map((x, y) => x * (y + 1))
  }