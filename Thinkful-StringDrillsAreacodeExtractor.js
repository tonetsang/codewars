function areaCode(text) {
    return text.match(/\((.*?)\)/)[1]
  }