function meeting(x){
  return x.some(el => el == 'O') == true ? x.findIndex(el => el == 'O') : 'None available!'
}