function logicalCalc(array, op){
    let operations = {
      AND: (a, b) => a && b,
      OR: (a, b) => a || b,
      XOR: (a, b) => a !== b,
    }
    return array.reduce(operations[op])
  }