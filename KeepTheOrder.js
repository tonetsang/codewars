function keepOrder(ary, val) {
    let index = ary.findIndex(x => val <= x)
    return index < 0 ? ary.length : index
}