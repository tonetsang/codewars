function alternateSqSum(arr){
    return arr.map((x, y) => y % 2 ? x ** 2 : x).reduce((a, b) => a + b, 0)
}