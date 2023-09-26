function nextPal(val) {
    const pal = x => String(x) == String(x).split('').reverse().join('')
    
    let ans = 0
    for (let i = val + 1; ; i++){
      if (pal(i)){
        ans = i
        break
      }
    }
    return ans 
}