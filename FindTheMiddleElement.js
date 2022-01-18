function gimme (triplet) {
    return triplet.findIndex(number => number == triplet.filter(a =>  a < Math.max(...triplet) && a > Math.min(...triplet)))
   }