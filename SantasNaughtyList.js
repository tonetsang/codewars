function findChildren(santasList, children) {
    return [...new Set(children.filter(kid => santasList.includes(kid)).sort())]
  }