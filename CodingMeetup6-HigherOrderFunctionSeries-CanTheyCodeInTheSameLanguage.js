function isSameLanguage(list) {
    let firstLanguage = list[0].language
    return list.every(x => x.language == firstLanguage)
  }