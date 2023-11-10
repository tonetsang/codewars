function counterEffect(hitCount) {
    let arr1 = [], arr2= [], arr3 = [], arr4 = []
    hitCount = hitCount.split('')
    for(let i = 0; i <= hitCount[0]; i++) { arr1.push(i) }
    for(let i = 0; i <= hitCount[1]; i++) { arr2.push(i) }
    for(let i = 0; i <= hitCount[2]; i++) { arr3.push(i) }
    for(let i = 0; i <= hitCount[3]; i++) { arr4.push(i) }
    return [arr1, arr2, arr3, arr4]
  }