//preload variable: dict

var makeBackronym = function(string){
  string = string.toUpperCase().split('')
  return string.map(x => x = dict[x]).join(' ')
}