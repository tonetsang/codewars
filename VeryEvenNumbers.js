function isVeryEvenNumber(n) {
  return n < 10 ? n % 2 == 0 : n >= 10 ? ((n - 1) % 9 + 1) % 2 == 0 : false
}