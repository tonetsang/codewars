function countLanguages(list) {
    let languages = {}
    list.map(x => languages[x.language] = (languages[x.language] || 0) + 1)
    return languages
  }