function mean(lst){
    let digits = lst.filter(x => x.match(/[0-9]/g)).reduce((a, b) => parseFloat(a) + parseFloat(b)) / 10
    let letters = lst.filter(x => x.match(/[a-z]/gi)).join('')
    return [digits, letters]
  }