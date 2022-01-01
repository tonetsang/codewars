function printerError(s) {
    return `${s.split('').filter(x=>/[n-z]/g.test(x)).length}/${s.length}`                          
}