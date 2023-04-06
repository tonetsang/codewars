function tripleX(str){
    let firstX = str.indexOf('x')
    return str[firstX + 1] == 'x' && str[firstX + 2] == 'x'
}