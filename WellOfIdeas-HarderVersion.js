function well(x){
    let count = 0
    x.map(x => x.map(y => String(y).toLowerCase() == 'good' ? count +=1 : 1))
    return count == 0 ? 'Fail!' : count <= 2 ? 'Publish!' : 'I smell a series!'
}