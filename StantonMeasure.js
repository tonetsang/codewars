function stantonMeasure(arg){
  const ones = arg.filter(x => x == '1').length
  return arg.filter(x => x == ones).length
}