function solution(value){
  value = value + ''
  return `Value is ${new Array(5 - value.length + 1).join('0') + value}`
}