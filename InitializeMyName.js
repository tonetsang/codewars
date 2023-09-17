function initializeNames(name){
    let newName = name.split(' ')
    for(let i = 1; i < newName.length - 1; i++){
      newName[i] = newName[i].charAt(0) + '.'
    }
    return newName.join(' ')
}