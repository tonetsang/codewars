function initials(n){
  let firstName = n.split(' ').slice(0, -1).map(x => x[0].toUpperCase()).join('.')
  let lastName = n.split(' ').slice(-1).join(' ')
  return `${firstName}.${lastName.charAt(0).toUpperCase() + lastName.slice(1)}` 
}