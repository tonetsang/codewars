const catchSignChange = arr => {
    let count = 0
    arr.map((v, i, arr )=> (v >= 0 && arr[i + 1] < 0) || (v < 0 && arr[i + 1] >= 0) ? count++ : count)
    return count
}