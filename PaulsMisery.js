function paul(x){
    let values = {'kata': 5, 'Petes kata': 10, 'life': 0, 'eating': 1,}
    let arr = Object.values(x).reduce((a, b) => a + (values[b]), 0)
    return arr < 40 ? 'Super happy!' : arr < 70 ? 'Happy!' : arr < 100 ? 'Sad!' : 'Miserable!'
}