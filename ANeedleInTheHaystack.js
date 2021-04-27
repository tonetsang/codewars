function findNeedle(haystack) {
    return `found the needle at position ${haystack.findIndex(n => n === 'needle')}`
  }