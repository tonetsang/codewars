function getSlope(p1, p2) {
  return p1[0] == p2[0] ? null : (p2[1] - p1[1]) / (p2[0] - p1[0])
}