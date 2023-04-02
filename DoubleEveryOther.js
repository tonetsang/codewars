function doubleEveryOther(a) {
    for(let i = 0; i < a.length; i++){
      if(i % 2) a[i] = a[i] * 2
    }
    return a
}