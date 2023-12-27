function remove (string) {
    let exclamationMarks = string.length - string.replace(/!/g, '').length
    return string.replace(/!/g, '') + '!'.repeat(exclamationMarks)
  }