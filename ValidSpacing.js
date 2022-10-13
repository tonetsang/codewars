function validSpacing(s) {
    return s.replace(/\s{2,}/g, ' ').trim() == s
  }