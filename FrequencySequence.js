function freqSeq(str, sep) {
    let arr = []
    str.split('').map(x => arr[x] = arr[x] ? arr[x] + 1 : 1)
    return str.split('').map(x => arr[x]).join(sep)
}