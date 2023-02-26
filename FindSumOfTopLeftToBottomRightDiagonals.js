function diagonalSum(matrix){
  return matrix.reduce((x, y ,z) => x + y[z], 0)
}